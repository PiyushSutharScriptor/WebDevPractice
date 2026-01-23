const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const router = require('./routes/userRoute')

//express loading
const app = express();

//logad environment variables from .env file
dotenv.config()

//mongoDB function execution
connectDb()

//user routing 
app.use('/user',router)

app.get('/' ,(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.PORT , ()=>{
    console.log("Server running...")
})