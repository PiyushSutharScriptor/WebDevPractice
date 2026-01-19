const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express();
const port = 3000;

app.set("view engine" , "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
// app.use("/files",express.static(path.join(__dirname,"files")))

app.get("/" , (req,res)=>{
    fs.readdir(`./files` , (err, files)=>{
        res.render("index",{files:files})
    })
})

const fileCreatePath = path.join(__dirname,"files");
app.post("/create" , (req,res)=>{
    fs.writeFile(
        `${path.join(fileCreatePath,req.body.title.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""))}.txt` 
        ,`${req.body.details}` 
        , (err)=>{
            if(err) console.log(err)
            console.log("file created")
        }
    ) 

    res.redirect('/')
})

app.get('/file/:filename' , (req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,'utf-8',(err,data)=>{
        res.render('showFile' ,{fname:req.params.filename , fdata:data })
    })
})

app.listen(port, ()=>{
    console.log("server running...")
})
