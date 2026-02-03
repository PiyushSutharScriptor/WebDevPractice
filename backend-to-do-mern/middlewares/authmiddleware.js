const user = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const auth = async(req,res,next)=>{

    try{

        const gtoken = req.headers.authorization

        if(gtoken==null){
            return res.status(401).json({
                message:"Token not found"
            })
        }

        const token = gtoken.split(" ")[1]
        const validUser = await jwt.verify(token, process.env.JWT_SECRET)

        if(validUser!=null){
            const findUser = await user.findById(validUser._id)

            if(findUser==null){
                return res.status(401).json({
                    message:"User not found"
                }) 
            }
            else{
                req.user = findUser
                next()
            }
        }
        else{
            return res.status(401).json({
                message:"User not found"
            })
        }

    }
    catch(err){
        res.status(401).json({
            message:"Error in middleware passing",
            error:err
        })
    }
    

}

module.exports = auth