import { JobListing } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";

export const getAllJobs = async (
  repo: Pick<DatabaseAdapater, "getAllJobs">
): Promise<JobListing[]> => {
  return await repo.getAllJobs();
};
