// routes/jobs.ts
import express from "express";
import { getAllJobsController } from "../controllers/job-controller";

const router = express.Router();

router.get("/jobs/all", getAllJobsController); // ✅ Correct usage

export default router;
