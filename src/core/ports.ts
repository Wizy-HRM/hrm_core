import { Company, JobListing } from "../../generated/client";

export interface DatabaseAdapater {
  getAllAds: () => Promise<JobListing[]>;
  createCompany: (company: Company) => Promise<Company>;
}
