import express from "express";
import UserController from "../controller/UserController.js";

const userRoute = express.Router();
const uInstance = new UserController();

userRoute.get("/", uInstance.index);
userRoute.post("/", uInstance.store);
userRoute.get("/:id", uInstance.show);
userRoute.put("/:id", uInstance.update);
userRoute.delete("/:id", uInstance.delete);

export default userRoute;