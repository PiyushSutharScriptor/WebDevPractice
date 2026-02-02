const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        postdata:{
            type:String,
            required:true
        },
        user:{
            type:String,
            required:true,
            trim:true
        },
        date:{
            type:Date,
            default:date.now()
        },  
    

    },

    {timestamps:true}
)

const post = mongoose.model('post',postSchema)
module.exports = post