const express = require('express')
const student = require('../models/studentSchema')
const studentRouter = express.Router()

//get
studentRouter.get('/student' , async(req,res)=>{
    try{
        const studentDta = await student.find()
        res.status(200).json({
            message:"Student Data",
            student:studentDta
        })
    }
    catch(err){
        console.log(err)
        res.status(501).json({
            message:"No data found ",err
        })
    }
})

//post
studentRouter.post('/student'  ,async(req,res)=>{
    try{
        const data = req.body
        const newData = await student.create(data)    

        res.status(201).json({
            message : "Student Data Added",
            student : newData
        })
    }   
    catch(err){
        res.status(501).json({
            message : "Error in adding data", err
        })                              
    }
})

//put
studentRouter.put('/student/:id' , async(req,res)=>{
    try{
        const sId = req.params.id;
        const newData = req.body;

        const updateStu = await student.findByIdAndUpdate(
            sId,newData,{new:true,runValidators:true}
        )
            // the runValidators is used to match the updatedUser 
            // with the schema (default the data will store directly) 
            // so avoid error in data we use runValidators

        if(!updateStu){
            res.status(501).json({
                message:"Student Not Updated"
            })
        }
        res.status(201).json({
            message:"Student Updated Successfully",
            student:updateStu
        })
    }
    catch(err){
        console.log(err)
        res.status(501).json({
            message:"Student Not Updated",err
        })
    }
})

module.exports = studentRouter
