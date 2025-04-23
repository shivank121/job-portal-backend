import { z } from "zod";

import { UserRole } from "../type/user.type";

export const registerValidationSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.nativeEnum(UserRole),
});

// Validation schema for login request
export const loginValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: z.nativeEnum(UserRole, { message: "Invalid role" }),
});

// Validation schema for profile update
export const updateProfileValidationSchema = z.object({
  fullName: z.string().min(3).optional(),
  phoneNumber: z.string().min(10).max(15).optional(),
  profile: z
    .object({
      bio: z.string().optional(),
      skills: z.string().optional(),
      resume: z.string().optional(),
      resumeOriginalName: z.string().optional(),
      company: z.string().optional(), // assuming ID is passed as string
      profilePhoto: z.string().optional(),
    })
    .optional(),
});
