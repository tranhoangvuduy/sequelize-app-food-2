
import { getListLike, getListRateRes, getListLikeResId, getListLikeUserId, getListRateResId,  getListRateUserId } from "../controllers/restaurantController.js";

import express from 'express';

const restaurantRouter = express.Router();

restaurantRouter.get("/getListLike", getListLike);

restaurantRouter.get("/getListLikeRes/:res_id", getListLikeResId);

restaurantRouter.get("/getListLikeUser/:user_id", getListLikeUserId);

restaurantRouter.get("/getListRateRes", getListRateRes);

restaurantRouter.get("/getListRateRes/:res_id", getListRateResId);

restaurantRouter.get("/getListRateUser/:user_id", getListRateUserId);





export default restaurantRouter;