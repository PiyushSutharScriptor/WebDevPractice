const express = require('express');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express();

dotenv.config()
app.use(cookieParser())

app.get('/' , (req,res)=>{
    res.send("Home Page")
})

app.get('/token' , async(req,res)=>{
    try{
        const token = await jwt.sign({email:"piyush@123"},process.env.PASS)
        // console.log(token)
        res.cookie("token" , token)
        res.send("JWT token creation")
    }
    catch(err){
        console.log(err)
        res.status(500).send("Error in token creation")
    }
    
})

app.get('/verify' , (req,res)=>{
    let data = jwt.verify(req.cookies.token,process.env.PASS)
    console.log(data)
    res.send("JWT verify")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Running")
})