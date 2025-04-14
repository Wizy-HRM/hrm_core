import { Company, JobListing } from "../../generated/client";

export interface DatabaseAdapater {
  getAllJobs: () => Promise<JobListing[]>;
  createCompany: (company: Company) => Promise<Company>;
  registerGoogleCompany: (
    company: Pick<
      Company,
      "email" | "info" | "location" | "platform" | "tenantId" | "registeredBy"
    >
  ) => Promise<Company>;
  getCompany: (email: string) => Promise<Company | null>;
  getCompanyDetails: (token: string) => Promise<Company | null>;
  searchCompanyByEmail: (email: string) => Promise<Company | null>;
  listCompanies: () => Promise<
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
  >;
  loginCompany: (email: string, password: string) => Promise<Company>;
  createAd: (
    add: JobListing
  ) => Promise<
    Pick<
      JobListing,
      | "description"
      | "title"
      | "endDate"
      | "startDate"
      | "status"
      | "referralSource"
      | "workplaceType"
      | "location"
      | "keywords"
      | "companyId"
    >
  >;
}
