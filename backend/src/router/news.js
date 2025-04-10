import express from "express";
import NewsController from "../controller/NewsController.js";
import UploadMiddleware from "../middleware/UploadMiddleware.js";
import RouteMiddleware from "../middleware/RouteMiddleware.js";

const newsRoute = express.Router();
const nInstance = new NewsController();
const uI= new UploadMiddleware();
let upload = uI.fileDestination('news');

newsRoute.get("/", nInstance.index);
newsRoute.post("/",upload.single('image'), nInstance.store);

export default newsRoute;