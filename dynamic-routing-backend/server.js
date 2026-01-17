const express = require('express')
const app = express()
const port = 3000

app.get('/' ,(req,res)=>{
    res.send("Main Page")
})

app.get('/profile/:id' , (req,res)=>{
    res.send("Dynamic Route")
    console.log(req.url)
    console.log(req.params.id)
})

app.listen(port , ()=>{
    console.log("server running")
})