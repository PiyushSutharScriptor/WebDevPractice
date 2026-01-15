const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Pintu Suthar")
})

server.listen(3000 , ()=>{
    console.log("Server running...")
})         