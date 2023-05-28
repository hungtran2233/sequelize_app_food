import { errorCode, successCode } from "../config/Response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

const models = initModels(sequelize);

const getRateRes = async (req, res) => {
	try {
		let data = await models.rate_res.findAll({
			include: ["re", "user"],
		});

		successCode(res, data, "Lấy dữ liệu thành công");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
};

const createRateRes = async (req, res) => {
	try {
		let { user_id, res_id, amount } = req.body;

		// Thêm giá trị defaultValue ở model rate_res.js để lấy giá trị ngày hiện tại
		//  defaultValue: DataTypes.NOW,
		let mod = { user_id, res_id, amount };

		let data = await models.rate_res.create(mod);
		successCode(res, data, "Thêm rate thành công ");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
};

export { getRateRes, createRateRes };
