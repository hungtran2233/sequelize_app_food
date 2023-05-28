import express from "express";
import userRouter from "./userRouter.js";
import foodRouter from "./foodRouter.js";
import like_resRouter from "./like_resRouter.js";
import rate_resRouter from "./rate_resRouter.js";
import orderRouter from "./orderRouter.js";
const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/food", foodRouter);
rootRouter.use("/like", like_resRouter);
rootRouter.use("/rate", rate_resRouter);
rootRouter.use("/order", orderRouter);

export default rootRouter;
