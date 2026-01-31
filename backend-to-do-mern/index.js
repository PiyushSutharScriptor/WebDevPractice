const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const formRouter = require('./routes/formRoute')

dotenv.config();
const app = express();

connectDb()
app.use(express.json())
app.use('/form' , formRouter)

app.get('/' , (req,res)=>{
    res.end("Main Page")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Running")
})

