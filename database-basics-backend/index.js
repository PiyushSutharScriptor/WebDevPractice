const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const router = require('./routes/userRoute')
const studentRouter = require('./routes/studentRoute')

//express loading
const app = express();
app.use(express.json())
//logad environment variables from .env file
dotenv.config()

//mongoDB function execution
connectDb()
    
//user routing 
app.use('/user',router)
app.use('/profile',studentRouter)

app.get('/' ,(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.PORT , ()=>{
    console.log("Server running...")
})