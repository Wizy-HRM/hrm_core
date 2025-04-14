import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";

export const listCompanies = async (
  repo: Pick<DatabaseAdapater, "listCompanies">
): Promise<
  Omit<
    Company,
    | "password"
    | "salt"
    | "registerToken"
    | "registerTokenExpired"
    | "forgotPasswordToken"
    | "forgotPasswordTokenExpired"
    | "tenantId"
  >[]
> => {
  const companies = await repo.listCompanies();
  return companies;
};
