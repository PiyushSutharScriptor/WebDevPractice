const express = require('express')
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

const app = express();

dotenv.config() 
app.use(cookieParser())
//with cookie
app.get('/' , (req,res)=>{
    res.cookie("Name"," Piyush Suthar")
    res.send("Done with setting cookie")
})

//without cookie
app.get('/data' , (req,res)=>{
    console.log(req.cookies)
    res.send("Data Page")
})  


//bcrypt encription
app.get('/pass' , (req,res)=>{
    bcrypt.genSalt(10,(err,salt)=>{ //10 is default
        console.log(salt)

        bcrypt.hash("Piyush",salt, (err,hash)=>{
            console.log(hash)
        })
    })

    res.send("Bcrypt encription")
})


//bcrypt compare (true/false)
app.get('/comp' , (req,res)=>{
    bcrypt.compare(process.env.PASS, process.env.EPASS , (err,res)=>{
        console.log(res)
    })

    res.send("Compare using bcrypt")
})


app.listen(process.env.PORT, ()=>{
    console.log("Server Running ...")
})