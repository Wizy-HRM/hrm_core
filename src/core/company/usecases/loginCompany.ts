import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";
import * as bcrypt from "bcryptjs";
import { loginUserSchema } from "../schemas";

export const LoginCompany = async (
  { email, password }: Pick<Company, "email" | "password">,
  repo: Pick<DatabaseAdapater, "getCompany">
) => {
  if (!email || !password) throw new Error("Email and password required!");
  const validateSchema = loginUserSchema.safeParse({ email, password });
  if (!validateSchema.success)
    throw new Error("Error on validation: " + validateSchema.error["message"]);
  const getUser = await repo.getCompany(email);

  if (getUser) {
    const checkPassword = await bcrypt.compare(password, getUser.password);
    if (!checkPassword) throw new Error("Password is incorrect");

    return getUser;
  }
  throw new Error("No user foud!");
};
