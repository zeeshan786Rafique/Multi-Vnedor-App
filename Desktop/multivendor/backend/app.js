const express = require("express")
const app=express();
const ErrorHandler = require("./utils/ErrorHandler")
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use("/", express.static("uploads"))

// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}
// error handler
app.use(ErrorHandler);

// routes
const user = require("./controller/user.js")
app.use("/api/v2/user", user)

module.exports = app