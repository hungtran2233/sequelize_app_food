import express from "express";
import { createRateRes, getRateRes } from "../controllers/rate_resController.js";

const rate_resRouter = express.Router();

rate_resRouter.get("/get-rate-res", getRateRes);
rate_resRouter.post("/create-rate-res", createRateRes);

export default rate_resRouter;
