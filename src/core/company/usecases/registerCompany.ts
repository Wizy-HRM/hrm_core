import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";
import * as bcrypt from "bcryptjs";
import { registerUserSchema } from "../schemas";
import crypto from "crypto";

export const registerCompany = async (
  password: string,
  db: Pick<DatabaseAdapater, "createCompany">,
  company: Company
) => {
  const validateSchema = registerUserSchema.safeParse(company);
  if (!validateSchema.success) {
    throw new Error("Error on validate: " + validateSchema.error["message"]);
  }
  const rounds = 12;
  const salt = await bcrypt.genSalt(rounds);
  const current = new Date();

  const companyItems: Company = {
    ...company,
    email: company.email,
    password: await bcrypt.hash(password, salt),
    info: company.info,
    location: company.location,
    registerToken: crypto.randomBytes(64).toString("hex"),
    registerTokenExpired: new Date(current.getTime() + 86400000),
    platform: company.platform,
    salt: salt,
    tenantId: company.tenantId,
  };

  return await db.createCompany(companyItems);
};
