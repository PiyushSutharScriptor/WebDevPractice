const express = require('express')
const path = require('path')

const app = express();
const port = 3000;

//backend data handling
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//setup for ejs
// app.use(express.static("./public")) //(it is risky)
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get('/', (req,res)=>{
    res.render("index",{name:"Piyush"})
})

app.listen(port , ()=>{
    console.log("sever running...")
})
