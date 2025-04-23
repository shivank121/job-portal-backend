import mongoose, { Types } from "mongoose";

export enum UserRole {
  JobSeeker = "Job seeker",
  Recruiter = "Recruiter",
}

export interface IUserBase {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: UserRole;
}

export interface IProfileBase {
  bio?: string;
  skills?: string;
  resume?: string;
  resumeOriginalName?: string;
  company?: mongoose.Types.ObjectId;
  profilePhoto?: string;
}

export interface User extends IUserBase {
  profile: IProfileBase;
}

// Interface for Mongoose Model (extends Document)
export interface IUser extends Document, User {}

// Login Response Interface
export interface LoginResponse {
  message: string;
  token: string;
  user: {
    _id: string;
    fullName: string;
    email: string;
    role: UserRole;
  };
}
