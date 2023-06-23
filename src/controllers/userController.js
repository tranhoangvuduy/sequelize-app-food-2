import { Sequelize } from 'sequelize';
import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
import { errorCode, successCode } from '../config/response.js';

const models = initModels(sequelize);
// enviroment => biến môi trường
// Op
const Op = Sequelize.Op;
const getNguoiDung = async (req, res) => {
    try {
        // sự dụng các hàm truy vấn data của sequelize
        // SELECT * FROM food JOIN food_type ON ... WHERE food_name LIKE '%a%';

        sequelize.query('SELECT * FROM food WHERE food_id = \'abc\' ');

        let data = await models.food.findAll({
            include: ["user_id_user_orders"]
        });


        // localhost:8080/api/user/get-nguoi-dung
        // res.status(200).send(data);
        successCode(res, data, "Lấy dữ liệu thành công");
    }
    catch {
        // res.status(500).send("Lỗi BE")
        errorCode(res, "Lỗi BE");
        // res.send(error.message);
    }
};
// Create
const createNguoiDung = async (req, res) => {
    try {
        // client data request body
        let { full_name, email, pass_word, } = req.body;

        // await Food_Type.findAll({where})

        let newData = {
            full_name,
            email,
            pass_word,
        };

        // INSERT INTO food VALUES ()
        await models.user.create(newData);

        res.status(200).send("Thêm mới thành công");
    } catch {
        res.status(500).send("Lỗi BE")
    }
}
// Update
const updateNguoiDung = async (req, res) => {
    try {
        let { user_id } = req.params;
        // client data request body
        let { full_name, email, pass_word, } = req.body;

        await models.user.update({
            full_name,
            email,
            pass_word,
        }, { where: { user_id } })
        res.status(200).send("Cập nhật thành công")
    } catch {
        res.status(500).send("Lỗi BE")
    }

}
// Delete
const removeNguoiDung = async (req, res) => {
    try {

        let { user_id } = req.params;
        // check tồn tại
        // [{},{},{}]
        // {}
        let checkFood = await models.user.findAll({ where: { user_id } });
        if (checkFood.length > 0) {
            // DELETE FROM food WHERE user_id = 12;
            await models.user.destroy({ where: { user_id } })
            res.status(200).send("Xóa thành công")
        } else {
            res.status(404).send("Item không tồn tại")
        }


    }
    catch {
        res.status(500).send("Lỗi BE")
    }
}

const getUserPage = async (req, res) => {
    let { page, pageSize } = req.params;
    let index = (page - 1) * pageSize;

    // SELECT * FROM user LIMIT index, pageSize

    // tổng sl (9) / tổng sl trên trang (6) = 1,5 = 2

    let data = await models.user.findAll({
        offset: index,
        limit: Number(pageSize)
    });
    successCode(res, data, "Thành công");
}

export {
    getNguoiDung,
    createNguoiDung,
    updateNguoiDung,
    removeNguoiDung,
    getUserPage
}