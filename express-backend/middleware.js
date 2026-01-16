const express = require('express')
const port = 3000
const app = express();

app.use((req,res,next)=>{
    // console.log(req.url)
    console.log("Middleware 1 called...")
    next();
})

app.get('/' ,(req,res)=>{
    console.log("Route called")
    res.send("Middleware Home Page")
})

app.use((req,res,next)=>{
    // console.log(req.url)
    console.log("Middleware 21 called...")
    next();
})

app.use((req,res,next)=>{
    // console.log(req.url)
    console.log("Middleware 3 called...")
    next();
})

app.get('/about' ,(req,res)=>{
    console.log("Route called")
    res.send("Middleware About Page")
})

app.get("/products" , (req,res,next)=>{
    return next(new Error("Something went wrong")) //prints in console
})

//error handling
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send("Error handling...") //shows in frontend
})

//listen port
app.listen(port , ()=>{
    console.log("Server running...")
})