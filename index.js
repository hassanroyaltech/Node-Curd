const express = require('express')
const mongoose = require('mongoose');
const UserRoutes = require("./routes/users.route.js")

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '20mb' }))

// routes
app.use("/api/users", UserRoutes)

// db connection
mongoose.connect("mongodb+srv://hassanahmedfiverr:CbVyNIwO23eZwJIO@nodetutorial.yi0dze1.mongodb.net/?retryWrites=true&w=majority&appName=NodeTutorial")
    .then(() => {
        console.log("connected")
        app.listen(3000)

    }).catch(error => console.log(error)) 