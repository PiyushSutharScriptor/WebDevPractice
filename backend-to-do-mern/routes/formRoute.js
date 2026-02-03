const express = require('express')
const form = require('../models/FormModel')
const auth = require('../middlewares/authmiddleware')

const formRouter = express.Router()

//add data
formRouter.post('/add', auth, async(req,res)=>{
    try{
        const data = req.body;
        data.user = req.user._id
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
formRouter.get('/get', auth, async(req,res)=>{
    try{
        const data = await form.find({user:req.user._id});
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


//update
formRouter.put('/update/:id',auth, async(req,res)=>{

    try{
        const formId = req.params.id;
        const newUser = req.body;
        
        const adUser = await form.findOneAndUpdate({_id:formId,user:req.user._id},newUser,{new:true , runValidators:true})
        
        if(!adUser){
            res.status(500).json({
                message:"No form data found to update",
            })
        }
        else{
            res.status(201).json({
                message:"Form data updated",
                form:adUser
            })
        }
    }
    catch(err){
        res.status(501).json({
            message:"Error in updating form data",err
        })
    }
})

//delete
formRouter.delete('/delete/:id', auth, async(req,res)=>{
    try{
        const formId = req.params.id;
        const delForm = await form.findOneAndDelete({_id:formId, user:req.user._id});

        if(!delForm){
            res.status(500).json({
                message:"Unable to find form for delete"
            })
        }
        else{
            res.status(200).json({
                message:"Form deleted",
                form:delForm
            })
        }
    }
    catch(err){
        res.status(501).json({
            message:"Error in deleting form", err
        })
    }
})

module.exports = formRouter;