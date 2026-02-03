const express = require('express')
const userRouter = express.Router()
const {signup,login} = require('../controllers/userController')
const auth = require('../middlewares/authmiddleware')

userRouter.post('/signup',signup)
userRouter.post('/login',login)

userRouter.get('/me' , auth , (req,res)=>{
    res.status(200).json({
        user:req.user
    })
})

module.exports = userRouter