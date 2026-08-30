const {Router}=require('express')

const jwt=require('jsonwebtoken')

const zod=require('zod')

const userRouter=Router()

const bcrypt=require('bcrypt')

require('dotenv').config()

const express=require('express')

const {authUSER,logger}=require('../middleware/middlewares')
const { userModel } = require('../db')

const app=express()

app.use(express.json())

userRouter.post('/signup',async (req,res)=>{
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
          const duplicate=await userModel.findOne({email:email})
    
        if(duplicate){
            return res.json({"message":"user already exist"})
        }
        else{
            const hashedPassword=await bcrypt.hash(password,5)
            await userModel.create({
            email:email,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName
        })
    
        res.json({"message":"signed up succesfully"})
    
        }

    
    }
    
})

userRouter.post('/login',logger,async (req,res)=>{

    const email=req.body.email
    const password=req.body.password

    const response=await userModel.findOne({email:email})

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




module.exports={
    userRouter:userRouter
}