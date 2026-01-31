const express = require('express')
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser')
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

app.listen(process.env.PORT, ()=>{
    console.log("Server Running ...")
})