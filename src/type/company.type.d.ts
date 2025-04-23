import mongoose, { Types, Document, Schema } from "mongoose";

// Base interface
export interface Company {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  website: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  logo: string;
  userId: Types.ObjectId[]; // or Types.ObjectId if it's a single user
}

// Extended interface for Mongoose model
export interface ICompany extends Company {}
