import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.schema";
import { IUser, IUserBase, LoginResponse, UserRole } from "../type/user.type";
import { jwt_secret } from "../const/user";
import { hashPassword } from "../utils/hashPassword";
import { comparePasswords } from "../utils/comparePasswords";

export const registerService = async (userData: IUserBase) => {
  const { email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = new User({
    ...userData,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();
  return savedUser;
};

export const loginService = async (
  email: string,
  password: string,
  role: UserRole,
): Promise<LoginResponse> => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid email or password");

  const isMatch = await comparePasswords(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  if (user.role !== role) throw new Error(`Access denied for role: ${role}`);

  const token = jwt.sign({ userId: user._id, role: user.role }, jwt_secret, {
    expiresIn: "1d",
  });

  return {
    message: "Login successful",
    token,
    user: {
      _id: user._id.toString(),
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
};

export const profileUpdateService = async (
  userId: string,
  updateData: Partial<IUser>,
) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: updateData },
    { new: true },
  ).select("-password"); // exclude password from response

  if (!updatedUser) {
    throw new Error("User not found or update failed");
  }

  return updatedUser;
};
