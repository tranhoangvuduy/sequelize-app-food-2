
import { createLike, UnLike, createRateRes, createOrder } from "../controllers/userController.js";

import express from 'express';

const userRouter = express.Router();

userRouter.post("/createLike", createLike);

userRouter.post("/createRateRes", createRateRes);

userRouter.post("/createOrder", createOrder);

userRouter.delete("/UnLike/:user_id/:res_id", UnLike);

export default userRouter;






