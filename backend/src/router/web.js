import express from "express";
import userRoute from "./users.js";

const webRoute = express.Router();


webRoute.get("/", (req, res) => {
    res.send("Hello World");
});

webRoute.use('/users', userRoute);

export default webRoute;