import mongoose, { Schema } from "mongoose";
import { ICompany } from "../type/company.type";

const companySchema = new Schema<ICompany>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    minSalary: {
      type: Number,
      required: true,
    },

    maxSalary: {
      type: Number,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  { timestamps: true },
);

const Company =
  mongoose.models.Company || mongoose.model<ICompany>("Company", companySchema);
export default Company;
