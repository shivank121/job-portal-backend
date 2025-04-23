import { z } from "zod";

export const companyRegisterValidationSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    website: z.string().url("Invalid website URL"),
    location: z.string().min(1, "Location is required"),
    minSalary: z.number().min(1, "Min salary must be more than 0"),
    maxSalary: z.number().optional(),
    logo: z.string().url("Invalid logo URL"),
    userId: z.string().nonempty("User Id required"),
  })
  .refine(
    (data) => {
      if (data.maxSalary !== undefined) {
        return data.maxSalary > data.minSalary;
      }
      return true;
    },
    {
      message: "maxSalary must be greater than minSalary",
      path: ["maxSalary"],
    },
  );

export const companyFilterValidationSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
  website: z.string().url("Invalid website URL").optional(),
  location: z.string().min(1, "Location is required").optional(),
  minSalary: z.number().min(1, "Min salary must be more than 0").optional(),
  maxSalary: z.number().optional().optional(),
  logo: z.string().url("Invalid logo URL").optional(),
  userId: z.array(z.string()).nonempty("userId is required").optional(),
});

export const updateCompanyValidationSchema = z.object({
  companyId: z.string().length(24, "Invalid company ID"),
  name: z.string().optional(),
  description: z.string().optional(),
  website: z.string().url().optional(),
  location: z.string().optional(),
  minSalary: z.number().optional(),
  maxSalary: z.number().optional(),
  logo: z.string().optional(),
});

export const deleteCompanyByIdValidationSchema = z.object({
  companyId: z.string().length(24, "Invalid company ID"),
});
