const mongoose = require('mongoose')

const FormModel = new mongoose.createSchema({
    title:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})

const form = mongoose.model('form',FormModel)
module.exports = form