import { Router } from "express";
import register_Route from "./register_Route.js";
import login_Route from "./login_Route.js";
import student_Route from "./student_Route.js";
import teacher_Route from "./teacher_Route.js";

const router = Router();

router.use("/register", register_Route);
router.use("/login", login_Route);
router.use("/students", student_Route);
router.use("/teachers", teacher_Route);

export default router;