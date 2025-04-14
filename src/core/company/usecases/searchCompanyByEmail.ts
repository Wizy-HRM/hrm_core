import { DatabaseAdapater } from "../../ports";

export const searchCompanyByEmail = async (
  email: string,
  repo: Pick<DatabaseAdapater, "searchCompanyByEmail">
) => {
  const company = await repo.searchCompanyByEmail(email);
  if (!company) return null;
  return company;
};
