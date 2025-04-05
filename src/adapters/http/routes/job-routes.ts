// routes/jobs.ts
import express from "express";
import { getAllJobsController } from "../controllers/listing-site-controllers/job-controller";

const router = express.Router();

router.get("/all", getAllJobsController); // ✅ Correct usage

export default router;
