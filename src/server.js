// import express from "express";
const path = require('path'); 
// const http = require('http');
import { localsMiddleware } from "./middlewares";
// import MongoStore from "connect-mongo";
import "./db";
import Car from "./models/Car";
import History from "./models/History";
import Part from "./models/Part";
import { home, search, postSearch, calendar, parts, postParts, postPartChange, carDelete, carUpdate } from "./rootController"

const PORT = 4000

const express = require("express");


const app = express(); 
app.set('view engine','ejs');  
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.get("/", home);
app.route("/search").get(search).post(postSearch);
app.route("/search/delete").post(carDelete);
app.route("/search/update").post(carUpdate);
app.get("/calendar", calendar);
app.route("/parts").get(parts).post(postParts);
app.route("/parts/:id([0-9a-f]{24})/change").post(postPartChange);


const handleListening = () => {
    console.log(`Server listening on port http://localhost:${PORT} 🚀`)
}

app.listen(PORT, handleListening);      //4000 포트, handleListening 이라는 callback