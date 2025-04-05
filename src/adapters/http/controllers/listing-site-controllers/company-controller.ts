import { Request, Response } from "express";
import { companiesRegister as registerRepoPrisma } from "../../../prisma/company/registerRepoPrisma";
import { registerCompany } from "../../../../core/company/usecases/registerCompany";

export const registerCompanyController = async (
  req: Request,
  res: Response
) => {
  try {
    const createNewCompany = await registerCompany(
      req.body.password,
      registerRepoPrisma,
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
