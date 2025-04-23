import mongoose, { Types } from "mongoose";

// export enum UserRole {
//   JobSeeker = "Job seeker",
//   Recruiter = "Recruiter",
// }

// export interface IUser extends mongoose.Document {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   password: string;
//   role: UserRole;
//   profile: {
//     bio?: string;
//     skills?: string;
//     resume?: string;
//     resumeOriginalName?: string;
//     company?: mongoose.Types.ObjectId;
//     profilePhoto?: string;
//   };
// }

export interface IJob extends mongoose.Document {
  title: string;
  description: string;
  requirement: string;
  location: string;
  salary: number;
  jobType: string;
  company: mongoose.Types.ObjectId;
  position: string;
  createdBy: mongoose.Types.ObjectId;
  application: mongoose.Types.ObjectId;
  created_by: mongoose.Types.ObjectId;
}

// export interface ICompany {
//   _id?: Types.ObjectId;
//   name: string;
//   description: string;
//   website: string;
//   location: string;
//   salary: number;
//   logo: string;
//   userId: Types.ObjectId[];
// }

export interface IApplication {
  _id?: Types.ObjectId;
  job: Types.ObjectId;
  applicant: Types.ObjectId;
  status?: "pending" | "accepted" | "rejected";
  createdAt?: Date;
  updatedAt?: Date;
}
