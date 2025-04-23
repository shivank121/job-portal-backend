// middleware/validateRequest.ts
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateRequest =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      if (req.method === "GET" || req.method === "DELETE") {
        schema.parse(req.query); // for GET/DELETE: validate query
      } else {
        schema.parse(req.body); // for POST/PUT/PATCH: validate body
      }
      next(); // ✅ Passes validation
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }));

        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Server error",
        });
      }
    }
  };
