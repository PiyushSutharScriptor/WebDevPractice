const user = require('../models/userSchema')
const express = require('express')

const router = express.Router()

router.get('/' , async(req,res)=>{
    const userData = await user.find()
    res.json(userData)
})

module.exports = router;