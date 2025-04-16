import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";

export const getCompanyDetailsUser = async (
  token: string,
  repo: Pick<DatabaseAdapater, "getCompany">
): Promise<Company | null> => {
  const findCompany = await repo.getCompany(token);
  if (!findCompany) return null;

  return findCompany;
};
