import express from "express";
import AuthController from "../controller/AuthController.js";

const authRoute = express.Router();
const aInstance = new AuthController();

authRoute.post("/", aInstance.login);
authRoute.post("/token-verify", aInstance.checkTokenVerify);

export default authRoute;