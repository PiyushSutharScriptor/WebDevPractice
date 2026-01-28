const express = require('express')
const dotenv = require('dotenv')

dotenv.config();
const app = express();

app.get('/' , (req,res)=>{
    res.end("Main Page")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Running")
})

