import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { jwt_secret } from "../const/user";
import { apiResponse } from "../utils/apiResponses";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}

export const isAuthenticated = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
      return;
    }

    const decoded = jwt.verify(token, jwt_secret) as {
      userId: string;
      role: string;
    };

    if (!decoded) {
      return apiResponse(res, 401, "Invalid token");
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token",
    });
  }
};
