const express = require('express')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')

const app = express()

dotenv.config()
app.use(cookieParser())

app.get('/' , (req,res)=>{
    res.send("Main Page")
})

//bcrypt hash creation
app.get('/create' , async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(process.env.PASS,salt)

        // console.log(hash)
        res.cookie("hash",hash)
        res.send("hash bcrypt creation")
    }
    catch(err){
        console.log(err)
        res.status(500).send("Error in hash creation using bcrypt")
    }
})

//bcrypt hash compare
app.get('/compare' , async(req,res)=>{
    try{
        await bcrypt.compare(process.env.PASS,req.cookies.hash , (err,res)=>{
            console.log(res)
        })
        res.send("Hash Comparison")
    }   
    catch(err){
        console.log(err)
        res.status(500).send("Error in hash comparison")
    }
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Running...")
})
