const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    }
    catch(err){
        console.log("Error in mongodb connection ", err)
    }
}

module.exports = connectDb;
