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
app.get('/contact' , (req,res)=>{
    res.render("contact" , {age:41})
})

//error route
app.get('/error' , (req,res)=>{
    throw Error("This is wrong route")
})

//error handling
app.use(
    function errorHandler (err, req, res, next) {
        if (res.headersSent) {
            return next(err)
        }
        res.status(500)
        res.render('errorPage' , {error:err}) 
    }
)

//port 
app.listen(port, ()=>{
    console.log("Server Running");
}) 
