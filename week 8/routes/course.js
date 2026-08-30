const {Router} =require('express')

const courseRouter=Router()

const {authUSER,logger}=require('../middleware/middlewares')
const { courseModel, purchaseModel } = require('../db')
const { default: mongoose } = require('mongoose')

courseRouter.get('/preview',logger,async (req,res)=>{
    const courses=await courseModel.find({})
    res.json({courses})
})

courseRouter.post('/purchase',logger,authUSER,async(req,res)=>{
    const userId=new mongoose.Types.ObjectId(req.userId)
    const courseId=new mongoose.Types.ObjectId(req.body.courseId)

    const purchase=await purchaseModel.create({
        courseId:courseId,
        userId:userId
    })

    res.json({"message":"course purchased succesfully"})

})

courseRouter.get('/purchases',logger,authUSER,async(req,res)=>{
    const userId=new mongoose.Types.ObjectId(req.userId)
    const purchase=await purchaseModel.find({userId:userId})
    res.json(purchase)
})

module.exports={
    courseRouter:courseRouter
}