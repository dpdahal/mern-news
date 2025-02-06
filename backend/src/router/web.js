import express from "express";
import userRoute from "./users.js";
import authRoute from "./auth.js";
import catRoute from "./category.js";

const webRoute = express.Router();


webRoute.get("/", (req, res) => {
    res.send("Hello World");
});

webRoute.use('/login',authRoute);
webRoute.use('/users', userRoute);
webRoute.use('/category', catRoute);

export default webRoute;