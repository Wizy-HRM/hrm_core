import { Company } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";

export const registerGoogleCompany = async (
  company: Pick<
    Company,
    | "email"
    | "info"
    | "location"
    | "platform"
    | "tenantId"
    | "registeredBy"
    | "loginToken"
    | "loginTokenExpired"
  >,
  repo: Pick<DatabaseAdapater, "registerGoogleCompany">
): Promise<Company> => {
  return await repo.registerGoogleCompany(company);
};
