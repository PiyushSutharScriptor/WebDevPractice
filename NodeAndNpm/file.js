const fs = require('fs')

//create file
fs.writeFile("first.txt" , "Hello Piyush" , (err)=>{
    if(err) console.error(err)
    console.log("File created")
})

//read file
fs.readFile("first.txt" , "utf-8" , (err,data)=>{
    if(err) console.error(err);
    console.log(data)
})

//append file
fs.appendFile("first.txt" , "\nasdfasdf" ,(err)=>{
    if(err) console.error(err)
    console.log("Append Done")
})

//rename file
fs.rename("first.txt" , "fileModule.txt" , (err)=>{
    if(err) console.error(err)
    console.log("File Name changed")
})

//copy file
fs.copyFile("fileModule.txt" , "copy.txt" , (err)=>{
    if(err) console.error(err)
    console.log("File copied")
})

//delete file 
fs.unlink("fileModule.txt",(err)=>{
    if(err) console.error(err)
    console.log("File deleted")
})