import express from "express";
import CategoryController from "../controller/CategoryController.js";

const catRoute = express.Router();
const uInstance = new CategoryController();

catRoute.get("/", uInstance.index);
catRoute.post("/", uInstance.store);
catRoute.get("/:id", uInstance.show);
catRoute.put("/:id", uInstance.update);
catRoute.delete("/:id", uInstance.delete);
export default catRoute;