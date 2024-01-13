const mongoose = require("mongoose")

const connectDataBase =()=>{
    mongoose.connect(process.env.DB_URL, {
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
    }).then((data)=>{
        console.log(`Database Connect at : ${data.connection.host}`);
    })
}

module.exports = connectDataBase