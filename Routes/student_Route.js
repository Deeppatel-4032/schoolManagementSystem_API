import { Router } from "express";
import { getStudentData, postStudentData} from "../Controllers/student_con.js";
const student_Route = Router();

student_Route.get("/", getStudentData);
student_Route.post("/", postStudentData);

export default student_Route;