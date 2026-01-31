const express = require('express')
const form = require('../models/FormModel')

const formRouter = express.Router()

//add data
formRouter.post('/add' , async(req,res)=>{
    try{
        const data = req.body;
        console.log(data)
        const newData = await form.create(data);

        res.status(200).json({
            message:"Form Added",
            form:newData
        })
    }
    catch(err){
        res.status(501).json({
            message:"Error in adding form ",err
        })
    }
})

//get data (done)
formRouter.get('/get' , async(req,res)=>{
    try{
        const data = await form.find();
        if(data){
            res.status(200).json({
                message:"Form Data Fetched",
                form:data
            })
        }
        else{
            res.status(501).json({
                message:"No Form Data Found"
            })
        }
    }
    catch(err){
        res.status(501).json({
            message:"Error in fetching form data",err
        })
    }
})

//modify 
//delete


module.exports = formRouter;