const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected")
    }
    catch(err){
        console.error("Error in DB connection" , err)
    }
}

module.exports = connectDb