import express from "express";
import {
  createNewAd,
  getCompanyDetails,
  listCompaniesController,
  LoginCompanyController,
  loginCompanyWithGoogle,
  loginCompanyWithGoogleRedirect,
  registerCompanyController,
} from "../controllers/listing-site-controllers/company-controller";
import { isCompanyLoggedIn } from "../middlewares/isCompanyLoggedIn";

const router = express.Router();

router.post("/register", registerCompanyController);
router.post("/login", LoginCompanyController);
router.get("/list", listCompaniesController);
router.get("/google/login", loginCompanyWithGoogle);
router.get("/google/callback", loginCompanyWithGoogleRedirect);
router.get("/company", isCompanyLoggedIn, getCompanyDetails);
router.post("/create/ad", isCompanyLoggedIn, createNewAd);

export default router;
