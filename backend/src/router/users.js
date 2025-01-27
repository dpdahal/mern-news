import express from "express";
import UserController from "../controller/UserController.js";
import UploadMiddleware from "../middleware/UploadMiddleware.js";

const userRoute = express.Router();
const uInstance = new UserController();
const uI= new UploadMiddleware();
let upload = uI.fileDestination('users');

userRoute.get("/", uInstance.index);
userRoute.post("/",upload.single('image'), uInstance.store);
userRoute.get("/:id", uInstance.show);
userRoute.put("/:id", uInstance.update);
userRoute.delete("/:id", uInstance.delete);

export default userRoute;