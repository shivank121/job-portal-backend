import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { Company } from "../type/company.type";
import {
  registerCompanyService,
  getFilteredCompanyService,
  updateCompanyService,
  getAllCompaniesService,
  deleteCompanyByIdService,
} from "../service/company.service";

import { apiResponse } from "../utils/apiResponses";

export const registerCompanyController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {

    console.log("hello shivank")
    const companyData = req.body as Company;
    const result = await registerCompanyService(companyData);

    apiResponse(res, StatusCodes.CREATED, "Company created successfully", result);

  } catch (error: any) {
    apiResponse(res, 500, error.message || "Something went wrong");
  }
};

export const getFilteredCompanyController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const filters: any = req.query;
    const companies = await getFilteredCompanyService(filters);

    apiResponse(res, 200, "Retrieve company successfully", companies);
  } catch (error: any) {
    apiResponse(res, 500, error.message || "Internal Server Error");
  }
};

export const updateCompanyController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const rawBody = req.body;

    const { companyId, ...updateData } = rawBody;

    const updatedCompany = await updateCompanyService(companyId, updateData);

    return apiResponse(
      res,
      200,
      "Company updated successfully",
      updatedCompany,
    );
  } catch (error: any) {
    return apiResponse(res, 500, error.message || "Internal Server Error");
  }
};

export const getAllCompaniesController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const companies = await getAllCompaniesService();
    apiResponse(res, 200, "Company retrieve successfully", companies);
  } catch (error: any) {
    apiResponse(res, 500, error.message || "Failed to retrieve companies");
  }
};

export const deleteCompanyController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {

    const companyId = req.query.companyId as string;
    const deleted = await deleteCompanyByIdService(companyId);

    if (!deleted) {
      return apiResponse(res, 404, "Company not found");
    }

    return apiResponse(res, 200, "Company deleted successfully", deleted);
  } catch (error: any) {
    return apiResponse(res, 500, error.message || "Failed to delete company");
  }
};

