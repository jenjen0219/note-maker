//a file system-realted functionality from Node.js
const fs = require("fs");
//also from node.js and this porvides the utility for file and directory ppaths
const path = require("path");
//popular node.js web app framework that provides the following features: routing, middleware, and HTTP requests
const express = require("express");

//creating the instance of the express app
const app = express();
//setting the value of our port
const PORT = process.env.port || 3000;

//configuring the express app to work with stattic files, parse URL enconded data, and parse JSON data
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET ROUTES 

//sending user to index page 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/assets/html/index.html"));
});

//getting the user to the notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/assets/html/notes.html"));
});


//starting the server 
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}`);
});