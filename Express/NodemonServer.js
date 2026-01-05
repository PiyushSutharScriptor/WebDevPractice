const express = require('express');
const app = express();

const port = 4000

//main route
app.get('/' , (req,res)=>{
    res.send("Nodemon server is running")
})

//about route
app.get('/about' , (req,res)=>{
    res.send("Nodemon about page")
})

//products route
app.get('/products' , (req,res)=>{
    res.send("Nodemon products page")
})

app.

app.listen(port , ()=>{
    console.log("Nodemon server running");
})
