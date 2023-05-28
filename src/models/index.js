// File chứa câu lệnh kết nối CSDL bằng sequelize
import { Sequelize } from "sequelize";
import config from "../config/config.js";

// biến chứa chuỗi kết nối CSDL
const sequelize = new Sequelize(config.db_database, config.db_user, config.db_pass, {
	host: config.db_host,
	port: config.db_port,
	dialect: config.db_dialect, // hệ csdl đang dùng
});

export default sequelize;

// try {
// 	await sequelize.authenticate();
// 	console.log("thanh cong");
// } catch (error) {
// 	console.log("that bai", error);
// }

// yarn add sequelize-auto
