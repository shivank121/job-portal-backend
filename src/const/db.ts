import dotenv from "dotenv";
dotenv.config();

export const mongo_url: string = process.env.MONGO_URI || "";
