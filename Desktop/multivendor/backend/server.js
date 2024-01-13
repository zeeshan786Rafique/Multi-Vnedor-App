const app = require("./app")
const connectDataBase = require("./db/database")
// handle uncaught exceptions 
process.on("uncaughtException", (error)=>{
    console.log(`Error: ${error.message}`);
    console.log("Server shuttdown due to uncaughtException error");
})

// chatgpt dotenv
require('dotenv').config({ path: './config/.env' }); // Adjust the path as needed
// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

// datbase connection 
connectDataBase();

// create server
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at http://locallhost: ${process.env.PORT}`);
})

// unhandle promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Server is shutt down due to unhandlePromise error`);
    server.close(()=>{
        process.exit(1)
    })
})