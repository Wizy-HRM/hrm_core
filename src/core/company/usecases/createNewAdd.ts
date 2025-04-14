import { JobListing } from "../../../../generated/client";
import { DatabaseAdapater } from "../../ports";

export const createNewAdd = async (
  ad: JobListing,
  repo: Pick<DatabaseAdapater, "createAd">
): Promise<
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
> => {
  return await repo.createAd({ ...ad });
};
