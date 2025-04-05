import { DatabaseAdapater } from "../../ports";

export const getAllJobs =
  (repo: Pick<DatabaseAdapater, "getAllAds">) => async () => {
    return repo.getAllAds();
  };
