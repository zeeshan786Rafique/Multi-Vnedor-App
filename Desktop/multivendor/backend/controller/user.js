const express = require("express")
const path = require("path")
const router = express.Router();
const {upload} = require("../multer.js")
const User = require("../models/user.js");
const ErrorHandler = require("../utils/ErrorHandler");

 // ye file name frontend me b file k nam se he hona chahye
router.post("/create-user", upload.single("file"), async(req, res, next)=>{
    const {name, email, password} = req.body;
    const userEmail = await User.findOne({email}); // is email ka mtlb frontend email or backend me email dono ka name same ha is liye ek dfa he likha ha isko
// agr user already database me ha mtlb already account ha or again wahe email se account bnane ke koshish kr rha
    if(userEmail){
    return next(new ErrorHandler("User is already exists", 400))
}

// avatar
const filename = req.file.filename;
const fileUrl = path.join(filename);

// agr user new ha tb 
const user ={
    name: name,
    email: email,
    password:password,
    avatar:fileUrl,
}
console.log(user);
})




