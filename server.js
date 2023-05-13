//also from node.js and this porvides the utility for file and directory ppaths
const path = require("path");
//popular node.js web app framework that provides the following features: routing, middleware, and HTTP requests
const express = require("express");

//creating the instance of the express app
const app = express();
//setting the value of our port
const PORT = process.env.PORT || 3001;
const api = require('./routes/notes');


//configuring the express app to work with stattic files, parse URL enconded data, and parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/api', api);

//GET ROUTES 


//getting the user to the notes page
app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

//sending user to index page 
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


//starting the server 
app.listen(PORT, () =>
    console.log(`App is listening on port ${PORT}`)
);