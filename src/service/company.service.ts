import Company from "../models/compony.schema";
import { ICompany } from "../type/company.type";

export const registerCompanyService = async (companyData: ICompany) => {
  const existing = await Company.findOne({
    name: { $regex: `^${companyData.name}$`, $options: "i" },
  });

  if (existing) {
    throw new Error("Company with this name already exists");
  }

  const newCompany = await Company.create(companyData);
  return newCompany;
};

export const getFilteredCompanyService = async (filters: ICompany) => {
  const query: any = {};

  if (filters.name) {
    query.name = { $regex: `^${filters.name}$`, $options: "i" };
  }

  if (filters.userId) {
    query.userId = filters.userId;
  }

  if (filters.minSalary) {
    query.minSalary = { $gte: Number(filters.minSalary) };
  }

  if (filters.maxSalary) {
    query.maxSalary = { $lte: Number(filters.maxSalary) };
  }

  const companies = await Company.find(query);
  return companies;
};

export const updateCompanyService = async (
  companyId: string,
  updateData: ICompany,
) => {
  const updatedCompany = await Company.findByIdAndUpdate(
    companyId,
    { $set: updateData },
    { new: true },
  );

  if (!updatedCompany) {
    throw new Error("Company not found");
  }

  return updatedCompany;
};

export const getAllCompaniesService = async () => {
  return await Company.find();
};

export const deleteCompanyByIdService = async (companyId: string) => {
  return await Company.findByIdAndDelete({ _id: companyId });
};
