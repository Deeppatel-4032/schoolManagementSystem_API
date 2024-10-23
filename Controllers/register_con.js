import { register_Model } from "../models/register_model.js";

const getregisterData = async (req, res) => {
  try {
      const registerData = await register_Model.find({});
      res.json({
          status: 200,
          message: "Data Found all students",
          data: registerData
      });
  } catch (error) {
    res.json({
        status : 404,
        error : "No Data Found",
    });
  }
}

const postregisterData = async (req, res) => {
    try {
        const { userName, email, password, com_password, role, createAt } = req.body;
        const registerData = new register_Model({
            userName,
            email,
            password,
            com_password,
            role,
            createAt
        });
        const registerAdd = await registerData.save();
        res.json({
            status: 200,
            message: "Data Found all students",
            data: registerAdd
        });
        
    } catch (error) {
        res.json({
            status: 404,
            error: "No Data Found"
        });
    }
}

export { getregisterData, postregisterData }

    