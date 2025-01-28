import express from "express";
import dotenv from "dotenv";
import webRoute from "./router/web.js";
import Database from "./connection/Database.js";
import DatabaseSeeder from "./seeder/DatabaseSeeder.js";

const app = express();
dotenv.config();


app.use(express.json());
app.use(express.static('public'))

Database.connect();
DatabaseSeeder.call();
app.use("/", webRoute);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on ${host}:${port}`);
});