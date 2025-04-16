import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";
import { loginUserSchema } from "../schemas";

export const LoginCompany = async (
  { email }: Pick<Company, "email">,
  repo: Pick<DatabaseAdapater, "getCompany">
) => {
  if (!email) throw new Error("Email required!");
  const validateSchema = loginUserSchema.safeParse({ email });
  if (!validateSchema.success)
    throw new Error("Error on validation: " + validateSchema.error["message"]);
  const getUser = await repo.getCompany(email);

  if (!getUser) {
    return null;
  }

  return getUser;
};
