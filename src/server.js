// import express from "express";
import rootRouter from "./routers/rootRouter";
const path = require('path'); 
// const http = require('http');
import { localsMiddleware } from "./middlewares";



const PORT = 4000


const express = require("express");


const app = express(); 

app.use(express.static(path.join(__dirname, 'views')));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/home.html");
});


// app.use("/", rootRouter);

const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening);      //4000 포트, handleListening 이라는 callback