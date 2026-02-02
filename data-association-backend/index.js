const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const userRoute = require('./routes/userRoute')

const app = express()
app.use(express.json())
dotenv.config()
connectDb()

app.use('/user' , userRoute)

app.get('/' , (req,res)=>{
    res.send("Main Page")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Running")
})