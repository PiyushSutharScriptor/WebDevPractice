const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        post:{
            type:Array,
            required:true
        }
    },

    {timestamps:true}
)

const user = mongoose.model('user',userSchema)
module.exports = user