const express = require('express') //use express in 'express' variable
const app = express() //giving express powers to 'app' variable.
const port = 3000 //port where the server will run

app.get('/' , (req,res)=>{
    res.send("Hello World");
})

app.listen(port , ()=>{
    console.log("Server Running")
})