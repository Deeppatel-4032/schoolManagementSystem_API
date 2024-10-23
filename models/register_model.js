import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    com_password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum : ["master", "principale", "teacher", "student"]
    },
    createAt : {
        type : Date,
        default : Date.now,
    }
});

export const register_Model = mongoose.model("registers", registerSchema);