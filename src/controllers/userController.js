import { Sequelize } from 'sequelize';
import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
import { errorCode, successCode, failCode } from '../config/response.js';
const models = initModels(sequelize);

//Post: Create Like_res
const createLike = async (req, res) => {
    try {
      let { user_id, res_id, date_like } = req.body;
  
      let result = await models.like_res.create({
        user_id,
        res_id,
        date_like,
      });
      successCode(res, result, "Người dùng like thành công!!!");
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  // Delete: UnLike
  const UnLike = async (req, res) => {
    try {
      let { user_id, res_id } = req.params;
      let checkUser = await models.like_res.findOne({
        where: {
          user_id,
          res_id,
        },
      });
  
      if (checkUser) {
        models.like_res.destroy({
          where: {
            user_id,
            res_id,
          },
        });
        successCode(res, checkUser, "Xoá like thành công!!!");
      } else {
        failCode(
          res,
          user_id,
          `User thứ ${user_id} chưa like cho nhà hàng thứ ${res_id} này!!!`
        );
      }
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  //Post: Create Rate_res
  const createRateRes = async (req, res) => {
    try {
      let { user_id, res_id, amount, date_rate } = req.body;
  
      let result = await models.rate_res.create({
        user_id,
        res_id,
        amount,
        date_rate,
      });
      successCode(res, result, "Người dùng đánh giá thành công!!!");
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  //Post: Create Order
  const createOrder = async (req, res) => {
    try {
      let { user_id, food_id, amount, code, arr_sub_id } = req.body;
  
      let result = await models.order.create({
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id,
      });
      successCode(res, result, "Người dùng order thành công!!!");
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  export { createLike, UnLike, createRateRes, createOrder };
  
  


