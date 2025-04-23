import express, { Request, Response } from "express";

// Middlewares
import { isAuthenticated } from "../middleware/isAuthenticated";
import { validateRequest } from "../middleware/validateRequest";

// Validation schemas
import {
  companyFilterValidationSchema,
  companyRegisterValidationSchema,
  deleteCompanyByIdValidationSchema,
  updateCompanyValidationSchema,
} from "../validators/company.validator";

// Controllers
import {
  getFilteredCompanyController,
  registerCompanyController,
  updateCompanyController,
  deleteCompanyController,
  getAllCompaniesController,
} from "../controllers/company.controller";

// ---------------------------------------------------------//
const companyRouter = express.Router();

companyRouter.post(
  "/v1/register",
  isAuthenticated,
  // @ts-ignore
  validateRequest(companyRegisterValidationSchema),
  registerCompanyController
);

companyRouter.get(
  "/v1/filter",
  isAuthenticated,
  validateRequest(companyFilterValidationSchema),
  getFilteredCompanyController
);

companyRouter.put(
  "/v1/update",
  isAuthenticated,
  validateRequest(updateCompanyValidationSchema),
  updateCompanyController
);

companyRouter.delete(
  "/v1/delete",
  isAuthenticated,
  validateRequest(deleteCompanyByIdValidationSchema),
  deleteCompanyController
);

companyRouter.get("/v1/all", isAuthenticated, getAllCompaniesController);

export default companyRouter;
