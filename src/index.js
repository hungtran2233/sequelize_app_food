import express from "express";
import cors from "cors";
import rootRouter from "./routers/rootRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080);

// Cấu trúc ban đầu
// app.get("/api", "/user", "/get-user", (req, res) => {});

// Cấu trúc khi đã chia tách:  localhost:8080/api/user/get-user
app.use("/api", rootRouter);

// 1) Kết nối csdl

// 2) Khởi tạo DAO ==> liên kết đến table

///////////////////

// Cách 1: yarn add sequelize-cli   ==> code first
// yarn sequelize-init

// Cách 2: yarn add sequelize-auto  ==> database first
