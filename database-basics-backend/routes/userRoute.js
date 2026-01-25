const express = require('express')
const user = require('../models/userSchema')  

const router = express.Router();

//get (without try catch )
router.get('/' , async(req,res)=>{
    const userData = await user.find();
    res.json(userData)
})

//post (with try catch)
router.post('/' , async(req,res)=>{
    try{
        const userData = req.body
        console.log(userData) // debugging
        const newData = await user.create(userData)

        res.status(201).json({
            message:"User added",
            user : newData
        });
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

//put (with try catch)
router.put('/:id' , async(req,res)=>{
    try{

        const userId = req.params.id;
        const newUser = req.body;
        
        const updatedUser = await user.findByIdAndUpdate(
            userId,
            newUser,
            {new:true , runValidators:true}
            // the runValidators is used to match the updatedUser 
            // with the schema (default the data will store directly) 
            // so avoid error in data we use runValidators
        )
        
        if(!updatedUser){
            res.status(501).json({
                message:"User not updated"
            })
        }
        
        res.status(201).json({
            message:"User Updated Successfully",
            user:updatedUser
        })
    }
    catch(err){
        res.status(501).json({
            message:"User Not Updated",err
        })
    }
})

module.exports = router
