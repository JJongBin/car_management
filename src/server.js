// import express from "express";
const path = require('path'); 
// const http = require('http');
import { localsMiddleware } from "./middlewares";
// import MongoStore from "connect-mongo";
import "./db";
import Car from "./models/Car";
import History from "./models/History";
import { home, search, calendar, parts } from "./rootController"

const PORT = 4000


const express = require("express");


const app = express(); 

app.use(express.static(path.join(__dirname, 'views')));


app.get("/", home);
app.get("/search/", search);
app.get("/calendar/", calendar);
app.get("/parts/", parts);


const handleListening = () => {
    console.log(`Server listening on port http://localhost:${PORT} 🚀`)
}

app.listen(PORT, handleListening);      //4000 포트, handleListening 이라는 callback