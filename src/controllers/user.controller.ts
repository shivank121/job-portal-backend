import { Request, Response } from "express";
import {
  registerService,
  loginService,
  profileUpdateService,
} from "../service/user.service";
import { IUserBase, LoginResponse, UserRole } from "../type/user.type";
import { apiResponse } from "../utils/apiResponses";

export const registerController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userData = req.body as IUserBase;

    // Call the service to register the user
    const result = await registerService(userData);

    // Send response
    apiResponse(res, 201, "User registered successfully", result);
  } catch (error: any) {
    apiResponse(res, 500, error.message || "Server error");
  }
};

export const loginController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { email, password, role } = req.body as {
      email: string;
      password: string;
      role: UserRole;
    };

    const result = await loginService(email, password, role);

    // Set token as HTTP-only cookie
    res.cookie("token", result.token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send response
    apiResponse(res, 200, "Login successful", {
      user: result.user,
      token: result.token,
    });
  } catch (error: any) {
    apiResponse(res, 401, error.message || "Login failed");
  }
};

export const logoutController = (req: Request, res: Response): any => {
  try {
    // Clear the token from the cookie
    res
      .status(200)
      .cookie("token", "", { maxAge: 0 }) // Clear the cookie by setting maxAge to 0
      .json({
        message: "Logout successful",
        success: true,
      });
  } catch (error: any) {
    apiResponse(res, 500, error.message || "Logout failed");
  }
};

export const profileUpdateController = async (
  req: Request,
  res: Response,
): Promise<any> => {
  try {
    // @ts-ignore
    const userId = req.user?.userId; // Assuming isAuthenticated middleware adds `req.user`
    const userData = req.body;

    if (!userId) apiResponse(res, 401, "Unauthorized");

    const updatedUser = await profileUpdateService(userId, userData);
    apiResponse(res, 200, "Profile updated successfully", updatedUser);
  } catch (error: any) {
    apiResponse(res, 500, error.message || "Failed to update profile");
  }
};
