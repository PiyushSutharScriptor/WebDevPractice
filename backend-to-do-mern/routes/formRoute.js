const express = require('express')
const form = require('../models/FormModel')

const formRouter = express.Router()

//add data


//get data (done)
formRouter.get('/get' , async(req,res)=>{
    try{
        const data = await form.find();
        if(data){
            res.status(200).json({
                message:"Data Fetched",
                form:data
            })
        }
        else{
            res.status(501).json({
                message:"No Data Found"
            })
        }
    }
    catch(err){
        res.status(501).json({
            message:"Error in fetching data",err
        })
    }
})

//modify 
formRouter.get('/' , (req,res)=>{
    res.send("Heierjhiej")
})


module.exports = formRouter;