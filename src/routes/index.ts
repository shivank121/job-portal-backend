import express from "express";
import userRouter from "./user.route";

const appRouter = express.Router();

appRouter.use("/api/users", userRouter);


export default appRouter;
