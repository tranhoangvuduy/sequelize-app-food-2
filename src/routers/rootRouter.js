import express from 'express';
import userRouter from './userRouter.js';
import productRouter from './productRouter.js';

const rootRouter = express.Router();

rootRouter.use("/user",userRouter);

rootRouter.use("/product",productRouter);


export default rootRouter;

// localhost:8080/api/user/get-nguoi-dung
// create-nguoi-dung