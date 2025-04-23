import express from "express";

// Middlewares
import { isAuthenticated } from "../middleware/isAuthenticated";
import { validateRequest } from "../middleware/validateRequest";

// Validation schemas
import {
  loginValidationSchema,
  registerValidationSchema,
  updateProfileValidationSchema,
} from "../validators/user.validator";

// Controllers
import {
  registerController,
  loginController,
  logoutController,
  profileUpdateController,
} from "../controllers/user.controller";

// ---------------------------------------------------------//
const userRouter = express.Router();

userRouter.post(
  "/v1/register",
  validateRequest(registerValidationSchema),
  registerController,
);

userRouter.post(
  "/v1/login",
  validateRequest(loginValidationSchema),
  loginController,
);

userRouter.post("/v1/logout", logoutController);

userRouter.put(
  "/v1/profile",
  isAuthenticated,
  validateRequest(updateProfileValidationSchema),
  profileUpdateController,
);

export default userRouter;
