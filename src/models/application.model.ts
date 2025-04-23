import mongoose, { Schema } from "mongoose";

import { IApplication } from "../type/schema.type";

const applicationSchema = new Schema<IApplication>(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Job",
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Application =
  mongoose.models.Application ||
  mongoose.model<IApplication>("Application", applicationSchema);
export default Application;
