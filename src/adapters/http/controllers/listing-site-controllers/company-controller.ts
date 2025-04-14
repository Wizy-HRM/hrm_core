import { Request, Response } from "express";
import { registerCompany } from "../../../../core/company/usecases/registerCompany";
import { sign } from "jsonwebtoken";
import { LoginCompany } from "../../../../core/company/usecases/loginCompany";
import { ErrorMessage } from "../../../prisma/types";
import { createNewAdd } from "../../../../core/company/usecases/createNewAdd";
import { PrismaAdapter } from "../../../prisma";
import { getCompanyDetailsUser } from "../../../../core/company/usecases/getCompany";
import { listCompanies } from "../../../../core/company/usecases/listCompnies";

export const registerCompanyController = async (
  req: Request,
  res: Response
) => {
  try {
    const createNewCompany = await registerCompany(
      req.body.password,
      PrismaAdapter.default,
      {
        ...req.body,
      }
    );
    if (!createNewCompany) {
      res.status(400).send("Error on create company");
    }

    res.status(201).send(createNewCompany);
  } catch (e) {
    res.status(500).send(`Error ${e}`);
  }
};

export const LoginCompanyController = async (req: Request, res: Response) => {
  try {
    const company = await LoginCompany(
      {
        email: req.body.email,
        password: req.body.password,
      },
      PrismaAdapter.default
    );

    const jwt = sign(
      {
        data: {
          email: company.email,
          id: company.id,
        },
      },
      process.env.JWT_SECRET
    );
    res.cookie("jwt", jwt);
    res.status(200).json({
      jwt,
    });
  } catch (e: any) {
    const errorMessage = e as ErrorMessage<string>;
    res.status(400).json({
      error: errorMessage.message,
    });
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
