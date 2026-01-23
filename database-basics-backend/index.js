const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = require('./config/db')

const app = express();

//logad environment variables from .env file
dotenv.config()
//mongoDB function execution
connectDb()

app.get('/' ,(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.PORT , ()=>{
    console.log("Server running...")
})