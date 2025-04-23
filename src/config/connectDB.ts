import mongoose from "mongoose";
import { mongo_url } from "../const/db";

const MONGO_URI: string = mongo_url;

const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    console.log("MongoDB connected via Mongoose");
  } catch (error) {
    console.error("Mongoose connection error:", (error as Error).message);
    process.exit(1);
  }
};

export default connectDB;
