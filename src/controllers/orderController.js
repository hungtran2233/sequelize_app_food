import { errorCode, successCode } from "../config/Response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

const models = initModels(sequelize);

const createOrder = async (req, res) => {
	try {
		let { user_id, food_id, amount, code, arr_sub_id } = req.body;

		let mod = { user_id, food_id, amount, code, arr_sub_id };

		let data = await models.order.create(mod);
		successCode(res, data, "Order thành công ");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
	// res.send("create order");
};

export { createOrder };
