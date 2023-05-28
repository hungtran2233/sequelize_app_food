// Food sẽ là đối tượng DAO, thuộc về sequelize. Trong sequelize sẽ có cơ chế ORM sẽ tiến hành
// mapping đối tượng bên sequelize quy định (ở đây là class Food) map đúng với table food
import { errorCode, successCode } from "../config/Response.js";
// import Food from "../models/food.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

const models = initModels(sequelize);

// findAll()  : SELECT * FROM food;
// select from join
const getFood = async (req, res) => {
	try {
		let data = await models.food.findAll({
			include: ["type"],
		});
		successCode(res, data, "Lấy food thành công");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
};

// Create
const createFood = async (req, res) => {
	try {
		let { food_name, image, price, desc, type_id } = req.body;

		let model = { food_name, image, price, desc, type_id };
		let data = await Food.create(model);

		successCode(res, data, "Thêm thành công");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
};
// Update
const updateFood = (req, res) => {};
// Delete
const deleteFood = (req, res) => {};

export { getFood, createFood, updateFood, deleteFood };
