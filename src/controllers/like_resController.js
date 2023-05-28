import { errorCode, successCode } from "../config/Response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

const models = initModels(sequelize);

const getLikeRes = async (req, res) => {
	try {
		let data = await models.like_res.findAll({
			include: ["re", "user"],
		});

		successCode(res, data, "Lấy dữ liệu thành công");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
};

const createLikeRes = async (req, res) => {
	try {
		let { user_id, res_id } = req.body;

		// Thêm giá trị defaultValue ở model like_res.js để lấy giá trị ngày hiện tại
		//  defaultValue: DataTypes.NOW,
		let mod = { user_id, res_id };

		let data = await models.like_res.create(mod);
		successCode(res, data, "Thêm like thành công ");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
};

const deleteLikeRes = async (req, res) => {
	try {
		let { user_id, res_id } = req.body;
		let mod = { user_id, res_id };
		let data = await models.like_res.destroy({ where: mod });
		successCode(res, data, "Xóa like thành công");
	} catch (error) {
		errorCode(res, "Lỗi server");
	}
};

export { getLikeRes, createLikeRes, deleteLikeRes };
