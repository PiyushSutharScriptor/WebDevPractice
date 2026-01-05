const express = require('express')
const app = express()
const port = 3000;

//middleware
app.use((req,res,next)=>{
    console.log("Middleware Running" , req.url)
    // res.send("Middleware response") // don't use this 
                                    // becuase the next() will not work
    next(); //

});

app.get('/' , (req,res)=>{
    res.send("Middlware Main request")
})

app.get('/about' , (req,res)=>{
    res.send("About Middleware")
})

app.listen(port , ()=>{
    console.log("Server Running...")
})

