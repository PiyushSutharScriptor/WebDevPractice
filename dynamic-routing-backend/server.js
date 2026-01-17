const express = require('express')
const app = express()
const port = 3000

app.get('/' ,(req,res)=>{
    res.send("Main Page")
})

//dynamic routes
app.get('/profile/:id' , (req,res)=>{
    res.send(`Dynamic Route for ${req.params.id}`)
    console.log(req.url)
    console.log(req.params.id)
})

app.get('/profile/:user/:age' , (req,res)=>{
    res.send(`Dynamic Route for ${req.params.user} of age : ${req.params.age}`)
    console.log(req.url)
    console.log(req.params.age)
})

app.listen(port , ()=>{
    console.log("server running")
})