import { JobListing } from "../../generated/client";

export interface DatabaseAdapater {
  getAllAds: () => Promise<JobListing[]>;
}
