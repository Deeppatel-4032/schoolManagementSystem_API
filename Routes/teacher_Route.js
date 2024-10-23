import { Router } from "express";
import { getTeacherData, postTeacherData } from "../Controllers/teacher_con.js";
const teacher_Route = Router();

teacher_Route.get("/", getTeacherData);
teacher_Route.post("/", postTeacherData);

export default teacher_Route;