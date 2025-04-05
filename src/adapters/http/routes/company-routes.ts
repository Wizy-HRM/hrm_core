import express from "express";
import { registerCompanyController } from "../controllers/listing-site-controllers/company-controller";

const router = express.Router();

router.post("/register", registerCompanyController);

export default router;
