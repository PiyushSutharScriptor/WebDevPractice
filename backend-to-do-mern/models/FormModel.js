const mongoose = require('mongoose')

const FormModel = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        details:{
            type:String,
            required:true,
            trim:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            red:"user",
            requied:true
        }
    },
    {timestamps:true}
)

const form = mongoose.model('form',FormModel)
module.exports = form