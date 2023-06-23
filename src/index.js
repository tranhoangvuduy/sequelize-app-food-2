
import express from 'express';
import cors from 'cors';
import rootRouter from './routers/rootRouter.js';
const app = express();

app.use(express.json()) 
app.use(cors());

app.listen(8080); 


app.use("/api",rootRouter);
// localhost:8080/api    
// /user => rootRouter
// /get-nguoi-dung => userRouter
// (req,res) => {} => userController 

// yarn add mysql2

// kết nối CSDL
// import mysql from 'mysql2';
// const connect = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: "3306",
//     database: "db_node32"
// });
