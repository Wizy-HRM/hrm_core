import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";

export const getCompanyDetailsUser = async (
  token: string,
  repo: Pick<DatabaseAdapater, "getCompany">
): Promise<Omit<Company, "password" | "salt"> | null> => {
  const findCompany = await repo.getCompany(token);
  if (!findCompany) return null;

  const { password, salt, ...companyWithoutPassword } = findCompany;
  return companyWithoutPassword;
};
