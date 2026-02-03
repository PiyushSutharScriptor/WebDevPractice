const user = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signup = async(req,res)=>{

    try{
        const data = req.body

        if(!data.username || !data.email || !data.password){
            return res.status(400).json({
                message:"username, email, and password are required"
            })
        }

        const findUser = await user.findOne({email:data.email})

        if(findUser==null){
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(data.password,salt)

            data.password = hash
            const newUser = await user.create(data);

            if(!newUser){
                res.status(500).json({
                    message:"Error in user data"
                })
            }
            else{
                res.status(200).json({
                    message:"User Added Successfully"
                })
            }
    
        }
        else{
            res.status(400).json({
                message:"User Already Exists"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"Error in user signup",
            error:err
        })
    }
}
