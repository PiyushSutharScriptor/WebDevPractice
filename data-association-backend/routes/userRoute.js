const user = require('../models/userModel')
const express = require('express')

const userRoute = express.Router();

userRoute.get('/getUser' , (req,res)=>{
    res.send("get user page")
})

userRoute.post('/postUser' , async(req,res)=>{
    try{
        const data = req.body;
        const newUser = await user.create(data) 

        if(!newUser){
            res.status(500).json({
                message : "User data not found"
            })
        }
        else{
            res.status(200).json({
                message:"User added",
                user:newUser
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"Error in adding user",err
        })
    }
})

module.exports = userRoute