import { Router } from "express";
import { getloginData, postloginData } from "../Controllers/login_con.js";
const login_Route = Router();

login_Route.get("/", getloginData);
login_Route.post("/", postloginData);

export default login_Route;