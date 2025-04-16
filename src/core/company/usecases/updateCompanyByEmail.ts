import { DatabaseAdapater } from "../../ports";

export const updateCompanyByEmail = async (
  email: string,
  loginToken: string,
  loginTokenExpired: Date,
  repo: Pick<DatabaseAdapater, "updateCompanyByEmail">
) => {
  return await repo.updateCompanyByEmail(email, loginToken, loginTokenExpired);
};
