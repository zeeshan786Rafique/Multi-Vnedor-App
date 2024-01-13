const { promises } = require("nodemailer/lib/xoauth2")

module.exports =(theFunc) => (req, res, next) =>{
    Promise.resolve(theFunc(req, res, next)). catch(next);
}
