import express from "express";
import {
	createFood,
	deleteFood,
	getFood,
	updateFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

//Khởi tạo API
// url:  localhost:8080/api/food/get-food

foodRouter.get("/get-food", getFood);
foodRouter.post("/create-food", createFood);
foodRouter.put("/update-food/:food_id", updateFood);
foodRouter.delete("/delete-food/:food_id", deleteFood);

export default foodRouter;
