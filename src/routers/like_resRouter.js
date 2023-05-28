import express from "express";
import {
	createLikeRes,
	deleteLikeRes,
	getLikeRes,
} from "../controllers/like_resController.js";

const like_resRouter = express.Router();

// khoi tao API

like_resRouter.get("/get-like-res", getLikeRes);
like_resRouter.post("/create-like-res", createLikeRes);
like_resRouter.delete("/delete-like-res", deleteLikeRes);

export default like_resRouter;
