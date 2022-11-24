require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser")
const User = require("./models/User")

const app = express();

const dbConnect = require("./config/dbConnect")

const authAPI = require("./apis/authAPI")

const emailAPI = require("./apis/emailAPI")
//connect to database
 
dbConnect()

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




//routes

app.get("/", (req, res)=> {
    res.send("inventory auth server")
})


//apis
app.use("/api/auth", authAPI );
app.use("/api/email", emailAPI );


//port 

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server is running on port ${port}`))


 