import { getAllJobs as prismaAdapter } from "../../../prisma/jobsListing/jobRepositoryPrisma";
import { getAllJobs as getAllJobsUsecase } from "../../../../core/shared/usecases/getAllJobs";
import { Request, Response } from "express";

const usecase = getAllJobsUsecase(prismaAdapter);

export const getAllJobsController = async (req: Request, res: Response) => {
  try {
    const jobs = await usecase();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
