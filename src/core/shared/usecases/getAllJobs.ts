import { DatabaseAdapater } from "../../ports";

export const getAllJobs = (repo: DatabaseAdapater) => async () => {
  return repo.getAllAds();
};
