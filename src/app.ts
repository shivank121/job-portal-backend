import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import appRouter from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5121"],
  credentials: true,
};

app.use(cors(corsOptions));

// Main API Routes
app.use(appRouter);

// Test Route
app.get("/", (_req, res) => {
  res.send("Job portal server is running");
});

export default app;
