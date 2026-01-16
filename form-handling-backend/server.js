const express = require('express')
const port = 3000
const app = express();

//to convert the data (for server)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/' ,(req,res)=>{
    res.send("Home Page")
})

app.get('/about' ,(req,res)=>{
    res.send("About Page")
})

app.listen(port , ()=>{
    console.log("Server running...")
})