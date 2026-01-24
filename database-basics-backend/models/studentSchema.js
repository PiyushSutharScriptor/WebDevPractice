const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    result:{
        type:Boolean,
        required:true
    }
})

const student = mongoose.model('student' , studentSchema)
module.exports = student;