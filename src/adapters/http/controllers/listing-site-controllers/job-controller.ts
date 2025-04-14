import { getAllJobs } from "../../../../core/shared/usecases/getAllJobs";
import { Request, Response } from "express";
import { PrismaAdapter } from "../../../prisma";

export const getAllJobsController = async (req: Request, res: Response) => {
  try {
    const jobs = await getAllJobs(PrismaAdapter.default);
    res.status(200).json({
      data: jobs,
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
