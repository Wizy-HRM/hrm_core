import { Request, Response } from "express";
import { registerCompany } from "../../../../core/company/usecases/registerCompany";
import { sign } from "jsonwebtoken";
import { LoginCompany } from "../../../../core/company/usecases/loginCompany";
import { ErrorMessage } from "../../../prisma/types";
import { createNewAdd } from "../../../../core/company/usecases/createNewAdd";
import { PrismaAdapter } from "../../../prisma";
import { getCompanyDetailsUser } from "../../../../core/company/usecases/getCompany";
import { listCompanies } from "../../../../core/company/usecases/listCompnies";
import axios from "axios";
import { searchCompanyByEmail } from "../../../../core/company/usecases/searchCompanyByEmail";
import { registerGoogleCompany } from "../../../../core/company/usecases/registerGoogleCompany";
import { sendMailer } from "../../../../core/shared/mailer";
import { validateMagicLink } from "../../../../core/company/usecases/validateMagicLink";
import { updateCompanyByEmail } from "../../../../core/company/usecases/updateCompanyByEmail";

export const LoginCompanyController = async (req: Request, res: Response) => {
  try {
    let company = await searchCompanyByEmail(
      req.body.email,
      PrismaAdapter.default
    );

    if (!company) {
      company = await registerCompany(PrismaAdapter.default, {
        ...req.body,
      });
    }

    const jwt = sign(
      {
        data: {
          email: company.email,
          id: company.id,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3h",
      }
    );

    const date = new Date(Date.now() + 3 * 60 * 60 * 1000);

    await updateCompanyByEmail(
      req.body.email,
      jwt,
      date,
      PrismaAdapter.default
    );

    await sendMailer(
      req.body.email,
      "Login to the app",
      `<span>Login using this  <a href='http://localhost:5000/v1/company/magic-link?token=${jwt}'>link</a></span>`
    );
    res.status(200).json({
      data: {
        emailSend: true,
      },
    });
  } catch (e: any) {
    const errorMessage = e as ErrorMessage<string>;
    res.status(400).json({
      error: errorMessage.message,
    });
  }
};

export const loginCompanyWithGoogle = async (req: Request, res: Response) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=profile email`;
  res.redirect(url);
};

export const loginCompanyWithGoogleRedirect = async (
  req: Request,
  res: Response
) => {
  const { code } = req.query;

  try {
    const { data } = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      code,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const { access_token, id_token } = data;
    const { data: profile } = await axios.get(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    let findCompany = await searchCompanyByEmail(
      profile.email,
      PrismaAdapter.default
    );

    if (!findCompany) {
      findCompany = await registerGoogleCompany(
        {
          email: profile.email!,
          info: {
            companyName: `${profile.name}`,
            image: profile.picture,
          },
          location: {},
          tenantId: null,
          platform: "JOBLISTING",
          registeredBy: "GOOGLE",
          loginToken: "",
          loginTokenExpired: new Date(),
        },
        PrismaAdapter.default
      );
    }

    const jwt = sign(
      {
        data: {
          email: findCompany.email,
          id: findCompany.id,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3h",
      }
    );

    console.log(profile);
    const date = new Date(Date.now() + 3 * 60 * 60 * 1000);
    await updateCompanyByEmail(
      findCompany.email,
      jwt,
      date,
      PrismaAdapter.default
    );

    res.redirect("/");
  } catch (error: any) {
    console.error("Error:", error.response.data.error);
    res.redirect("/login");
  }
};

export const createNewAd = async (req: Request, res: Response) => {
  try {
    if (!req.companyUser) throw new Error("Error not company user id found");
    console.log(req.companyUser.data.id);
    const ad = await createNewAdd(
      {
        companyId: req.companyUser.data.id,
        ...req.body,
      },
      PrismaAdapter.default
    );

    res.status(200).json({
      data: ad,
    });
  } catch (e: any) {
    const errorMessage = e as ErrorMessage<string>;
    res.status(405).json({
      error: errorMessage.message,
    });
  }
};

export const getCompanyDetails = async (req: Request, res: Response) => {
  try {
    const company = await getCompanyDetailsUser(
      req.companyUser?.data.email!,
      PrismaAdapter.default
    );

    if (!company) {
      res.status(404).send("No company found");
    } else {
      res.status(200).json({
        data: company,
      });
    }
  } catch (e: any) {
    const errorMessage = e as ErrorMessage<string>;
    res.status(401).send("Unauthorized!");
  }
};

export const listCompaniesController = async (req: Request, res: Response) => {
  try {
    const companies = await listCompanies(PrismaAdapter.default);
    res.status(200).json({
      data: companies,
    });
  } catch (e: any) {
    const errorMessage = e as ErrorMessage<string>;
    res.status(405).send(`Error fetching companies: ${errorMessage}`);
  }
};

export const validateMagicLinkController = async (
  req: Request,
  res: Response
) => {
  try {
    const company = await validateMagicLink(
      req.query.token as string,
      PrismaAdapter.default
    );
    if (!company) res.status(404).send("Not found magic link user");

    res.cookie("jwt", company?.loginToken);
    res.status(200).json({
      data: company,
    });
  } catch (e: any) {
    const errorMessage = e as ErrorMessage<string>;
    res.status(404).send(`Error for magic link ${errorMessage.message}`);
  }
};
