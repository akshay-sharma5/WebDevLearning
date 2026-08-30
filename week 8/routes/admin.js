const express=require('express')

const {Router}=require('express')

const adminRouter=Router()

const {adminModel, courseModel}=require('../db')

const zod=require('zod')

const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')

const mongoose=require('mongoose')

require('dotenv').config()

const {authADMIN,logger}=require('../middleware/middlewares')


const app=express()

app.use(express.json())

adminRouter.post('/signup',logger,async (req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const firstName=req.body.firstName
    const lastName=req.body.lastName

    const verifyFormat=zod.object({
        "email":zod.string().email().min(3).max(30),
        "password":zod.string().min(6).max(30),
        "lastName":zod.string().min(3).max(30),
        "firstName":zod.string().min(3).max(30)
    })

    const verifyFormatSuccess=verifyFormat.safeParse(req.body)

    if(!verifyFormatSuccess.success){
        console.log(verifyFormatSuccess.error.issues.map(issue=>issue.message))

        return res.json({"message":verifyFormatSuccess.error.issues.map(issue=>issue.message)})

    }
    else{
          const duplicate=await adminModel.findOne({email:email})
    
        if(duplicate){
            return res.json({"message":"user already exist"})
        }
        else{
            const hashedPassword=await bcrypt.hash(password,5)
            await adminModel.create({
            email:email,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName
        })
    
        res.json({"message":"signed up succesfully"})
    
        }

    
    }
    
})

adminRouter.post('/login',logger,async (req,res)=>{

    const email=req.body.email
    const password=req.body.password

    const response=await adminModel.findOne({email:email})

    if(!response){
        return res.json({"message":"user doesnt exist"})
    }
    else{
        const verifyPassword=await bcrypt.compare(password,response.password)

    if(verifyPassword){
        const token=jwt.sign({"id":response._id.toString()},process.env.JWT_SECRET)

        res.json({"token":token})
    }
    else{
        res.json({
            "message":"Incorrect password"
        })
    }
    }

})


adminRouter.post('/course',logger,authADMIN,async(req,res)=>{
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
    const imageUrl=req.body.imageUrl
    console.log(req.userId)
    const creatorId=new mongoose.Types.ObjectId(req.userId)

    const course=await courseModel.create({
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        creatorId:creatorId
    })

    res.json({message:"course created succesfully",
        course:course
    })
})


adminRouter.put('/course',logger,authADMIN,async (req,res)=>{
    const adminId=body.userId

    const {title,description,price,imageUrl}=req.body

    const course=await courseModel.updateOne({
        _id:courseId,
        createrId:adminId
    },
    {
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
        
    })

    res.json({"message":"course updated successfully",
        courseId:courseId,
    })
})

adminRouter.get('/course/bulk',logger,authADMIN,async(req,res)=>{

    const adminId=req.userId
    
    const courses=await courseModel.find({
        creatorId:adminId
    })
    res.json({message:courses})
    console.log(courses)
})

module.exports={
    adminRouter:adminRouter
}