
import { getNguoiDung, createNguoiDung } from "../controllers/userController.js";

import express from 'express';

const productRouter = express.Router();


productRouter.get("/get-product", getNguoiDung)
productRouter.post("/create-product", createNguoiDung)

export default productRouter;