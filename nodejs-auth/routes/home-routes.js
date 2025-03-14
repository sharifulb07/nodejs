
const express=require('express')
const authMiddleWare=require('../middleware/auth-middleware')
const router=express.Router()

router.get('/welcome',authMiddleWare, (req, res)=>{
    res.status(200).json({
        message:"Welcome to our Home page Here "
    })
})


module.exports=router