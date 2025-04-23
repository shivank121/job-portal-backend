import express from "express";
import userRouter from "./user.route";
import companyRouter from "./company.route";

const appRouter = express.Router();

appRouter.use("/api/users", userRouter);
appRouter.use("/api/company", companyRouter);


export default appRouter;
