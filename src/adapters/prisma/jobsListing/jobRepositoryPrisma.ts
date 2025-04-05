import { DatabaseAdapater } from "../../../core/ports";
import { prisma } from "..";

export const getAllJobs: Pick<DatabaseAdapater, "getAllAds"> = {
  async getAllAds() {
    return prisma.prisma.jobListing.findMany();
  },
};
