import { Sequelize } from 'sequelize';
import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
import { errorCode, successCode, failCode } from '../config/response.js';
const models = initModels(sequelize);

// Get: Lấy danh sách Like theo nhà hàng và user
const getListLike = async (req, res) => {
    try {
      let data = await models.restaurant.findAll({
        include: ["user_id_users"],
      });
      successCode(res, data, "Lấy dữ liệu thành công");
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  // Get: Lấy danh sách Like theo nhà hàng
  const getListLikeResId = async (req, res) => {
    try {
      let { res_id } = req.params;
  
      let checkRes = await models.restaurant.findOne({
        where: {
          res_id,
        },
      });
  
      if (checkRes) {
        let data = await models.like_res.findAll({
          include: ["re"],
          where: {
            res_id,
          },
        });
        successCode(res, data, "Lấy dữ liệu thành công");
      } else {
        failCode(res, res_id, `Nhà hàng thứ ${res_id} không tồn tại`);
      }
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  // Get: Lấy danh sách Like theo User
  const getListLikeUserId = async (req, res) => {
    try {
      let { user_id } = req.params;
  
      let checkUser = await models.user.findOne({
        where: {
          user_id,
        },
      });
  
      if (checkUser) {
        let data = await models.like_res.findAll({
          include: ["user"],
          where: {
            user_id,
          },
        });
        successCode(res, data, "Lấy dữ liệu thành công");
      } else {
        failCode(res, checkUser, `Người dùng thứ ${user_id} không tồn tại`);
      }
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  // Get: Lấy danh sách đánh giá theo nhà hàng và user
  const getListRateRes = async (req, res) => {
    try {
      let data = await models.restaurant.findAll({
        include: ["user_id_user_rate_res"],
      });
      successCode(res, data, "Lấy dữ liệu thành công");
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  // Get: Lấy danh sách đánh giá theo nhà hàng
  const getListRateResId = async (req, res) => {
    try {
      let { res_id } = req.params;
  
      let checkRes = await models.restaurant.findOne({
        where: {
          res_id,
        },
      });
  
      if (checkRes) {
        let data = await models.rate_res.findAll({
          include: ["re"],
          where: {
            res_id,
          },
        });
        successCode(res, data, "Lấy dữ liệu thành công");
      } else {
        failCode(res, res_id, `Nhà hàng thứ ${res_id} không tồn tại`);
      }
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  // Get: Lấy danh sách đánh giá theo User
  const getListRateUserId = async (req, res) => {
    try {
      let { user_id } = req.params;
  
      let checkUser = await models.user.findOne({
        where: {
          user_id,
        },
      });
  
      if (checkUser) {
        let data = await models.rate_res.findAll({
          include: ["user"],
          where: {
            user_id,
          },
        });
        successCode(res, data, "Lấy dữ liệu thành công");
      } else {
        failCode(res, checkUser, `Người dùng thứ ${user_id} không tồn tại`);
      }
    } catch (err) {
      errorCode(res, "Lỗi Backend");
    }
  };
  
  export  {
    getListLike,
    getListRateRes,
    getListLikeResId,
    getListLikeUserId,
    getListRateResId,
    getListRateUserId
  };
  