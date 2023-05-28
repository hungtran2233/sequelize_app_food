import express from "express";
import {
	createUser,
	getUser,
	removeUser,
	updateUser,
} from "../controllers/userController.js";
const userRouter = express.Router();

// Quản lý restful API
userRouter.get("/get-user", getUser);
userRouter.post("/post-user", createUser);
userRouter.put("/update-user", updateUser);
userRouter.delete("/remove-user", removeUser);

export default userRouter;
