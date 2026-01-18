const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express();
const port = 3000;

app.set("view engine" , "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get("/" , (req,res)=>{
    fs.readdir(`./files` , (err, files)=>{
        res.render("index",{files:files})
        console.log(files);
    })
})

app.listen(port, ()=>{
    console.log("server running...")
})
