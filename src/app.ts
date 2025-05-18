// const express = require("express");
import express from "express";
import 'dotenv/config';
import path from "path";
import webRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8080;

// cấu hình view engine (PHẢI đặt trước routes)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static files :images, css,js
app.use(express.static('public'));


// config routes
webRoutes(app);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`My app is running on port : ${PORT}`);
    console.log("env port: ", process.env.PORT);
});