const express = require('express')
const userRouter = express.Router()
const {signup} = require('../controllers/userController')

userRouter.post('/signup',signup)

module.exports = userRouter