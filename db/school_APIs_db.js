import mongoose from "mongoose";

const schoolDB = mongoose.connect("mongodb+srv://deeppatel7868:7SL2VPO1CkEaTAU3@schoolcluster1.mpoyq.mongodb.net/schooleManagement_db").then((res) => {
    console.log("DB is Connected");
}).catch((error) => {
    console.log("DB is not Connected", error);
})

export default schoolDB;