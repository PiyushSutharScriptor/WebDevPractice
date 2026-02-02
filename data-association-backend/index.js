const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')

const app = express()
dotenv.config()
connectDb()

app.get('/' , (req,res)=>{
    res.send("Main Page")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Running")
})