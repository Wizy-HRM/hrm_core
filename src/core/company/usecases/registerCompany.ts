import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";
import * as bcrypt from "bcryptjs";
import { registerUserSchema } from "../schemas";
import crypto from "crypto";

export const registerCompany = async (
  db: Pick<DatabaseAdapater, "createCompany">,
  company: Company
) => {
  const validateSchema = registerUserSchema.safeParse(company);
  if (!validateSchema.success) {
    throw new Error("Error on validate: " + validateSchema.error["message"]);
  }

  const companyItems: Company = {
    ...company,
    email: company.email,
    info: company.info,
    location: company.location,
    platform: company.platform,
    tenantId: company.tenantId,
    loginToken: company.loginToken,
  };

  return await db.createCompany(companyItems);
};
