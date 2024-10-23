import { login_Model } from "../models/login_model.js";

const getloginData = async (req, res) => {
    try {
        const loginData = await login_Model.find({});
        res.json({
            status: 200,
            message: "Data Found all students",
            data: loginData
        });
    } catch (error) {
        res.json({
            status: 404,
            error: "No Data Found"
        });
    }
}

const postloginData = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginData = new login_Model({
            email,
            password
        });
        const loginAdd = await loginData.save();
        res.json({
            status: 201,
            message: "Data Found all students",
            data: loginAdd
        });
    } catch (error) {
        res.json({
            status: 404,
            error: "No Data Found"
        });
    }
}

export { getloginData, postloginData }