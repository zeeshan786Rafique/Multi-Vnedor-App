const ErrorHandler = require("../utils/ErrorHandler")

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"

    // wrong db error
    if(err.name === "CastError"){
        const message = `Resources not found with this id... invalid ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    // duplicate key error
    if(err.code  === 11000){
        const message = `Duplicate key ${Object.keys(err.KeyValue)} Entered`
        err =  new ErrorHandler(message, 400)
    }
// wrong jwt token
    if(err.name === "JsonWebToken"){
        const message = `Your Url is invalid please try again later`
        err = new ErrorHandler(message, 400)
    }

    // jwt expired 
    if(err.name === "TokenExpiredError"){
        const message = `Your url is expired please try again later`
        err = new ErrorHandler(message, 400)
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}