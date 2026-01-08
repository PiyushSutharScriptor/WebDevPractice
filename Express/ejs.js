const express = require('express')
const app = express();
const port = 3000;

//ejs configuration
app.set("view engine" , "ejs");

//static file configuration
app.use(express.static('./public'))

//middleware
app.use((req,res,next)=>{
    console.log("Middeware by : " , req.url)
    next();
})

//route with ejs file
app.get('/' , (req,res)=>{
    res.render("index" , {type : "Piyush Suthar"})
})

//route with ejs file 2
app.get('/about' , (req,res)=>{
    res.render("about" , {age:41})
})

//port 
app.listen(port, ()=>{
    console.log("Server Running");
}) 
