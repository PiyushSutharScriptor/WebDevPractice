const express = require('express')
const user = require('../models/userSchema')  

const router = express.Router();

router.get('/' , async(req,res)=>{
    const userData = await user.find();
    res.json(userData)
})

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

module.exports = router
