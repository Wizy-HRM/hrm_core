import { Company, JobListing } from "../../generated/client";

export interface DatabaseAdapater {
  getAllJobs: () => Promise<JobListing[]>;
  createCompany: (company: Company) => Promise<Company>;
  registerGoogleCompany: (
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
    >
  ) => Promise<Company>;
  getCompany: (email: string) => Promise<Company | null>;
  getCompanyDetails: (token: string) => Promise<Company | null>;
  searchCompanyByEmail: (email: string) => Promise<Company | null>;
  listCompanies: () => Promise<Omit<Company, "tenantId">[]>;
  loginCompany: (email: string) => Promise<Company>;
  validateMagicLink: (token: string) => Promise<Company | null>;
  updateCompanyByEmail: (
    email: string,
    loginToken: string,
    loginTokenExpired: Date
  ) => Promise<Company>;
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
