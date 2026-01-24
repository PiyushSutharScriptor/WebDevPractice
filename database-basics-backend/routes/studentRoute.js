const express = require('express')
const student = require('../models/studentSchema')
const studentRouter = express.Router()

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

module.exports = studentRouter