import { DatabaseAdapater } from "../../../core/ports";
import { prisma } from "..";

export const getAllJobs: DatabaseAdapater = {
  async getAllAds() {
    return prisma.prisma.jobListing.findMany();
  },
};
