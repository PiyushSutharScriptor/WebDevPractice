const express = require('express')
const app = express()
const port = 3000;

app.use((req,res,next)=>{
    console.log("Middleware Running" , req.url)
    next()
})

//normal route 01
app.get('/' , (req,res)=>{
    res.send("Home page")
})

//normal route 02
app.get('/piyush' , (req,res)=>{
    res.send("Message from Piyush")
})

//normal route 03
app.get('/piyush/profile' , (req,res)=>{
    res.send("Message from Piyush profile")
})


//dynamic route
app.get('/piyush/:id' , (req,res)=>{
    res.send("Message from dyanmic route")
})

//running server on port
app.listen(port,()=>{
    console.log("Server Running")
})