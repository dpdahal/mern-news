import express from "express";
import userRoute from "./users.js";
import authRoute from "./auth.js";

const webRoute = express.Router();


webRoute.get("/", (req, res) => {
    res.send("Hello World");
});

webRoute.use('/login',authRoute);
webRoute.use('/users', userRoute);

export default webRoute;