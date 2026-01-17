const express = require('express')
const app = express();
const port = 3000;

//backend data handling
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//setup for ejs
app.use(express.static("./views"))
app.set("view engine","ejs")

app.get('/', (req,res)=>{
    res.render("index",{name:"Piyush"})
})

app.listen(port , ()=>{
    console.log("sever running...")
})
