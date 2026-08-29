const express =require('express')

const zod =require('zod')

const {UserModel,TodoModel,connectDb} =require('./db')

const jwt=require('jsonwebtoken')

const app=new express()

app.use(express.json())

JWT_SECRET="JWT_SECRET"

const emailSchema=zod.email()
const passwordSchema=zod.string().min(6)


app.post('/signup',logger,async (req,res)=>{
const email=req.body.email
const password=req.body.password
const name=req.body.name

const formatEmail=emailSchema.safeParse(email)
const formatPassword=passwordSchema.safeParse(password)

if(!formatEmail.success){
    return res.json({"message":"invalid email"})
}

if(!formatPassword.success){
    return res.json({"message":"invalid password"})
}

const response=await UserModel.findOne({
        email:email,
        password:password
    })
    if(response){
        return res.json("user already exist")
    }
await UserModel.create({
    email:email,
    password:password,
    name:name
})

res.json({"message":"You are signed up"})

})

app.post('/signin',logger,async (req,res)=>{
    const email=req.body.email
    const password=req.body.password

    const response=await UserModel.findOne({
        email:email,
        password:password
    })

    if(response){
        const token=jwt.sign({id:response._id.toString()},JWT_SECRET)
        
        res.json({"message":"You are succesfully signed in",
            "token":token
        })
    }else{
        res.json({"message":"User not found"})
    }
    
})

app.post('/todo',logger,auth,async(req,res)=>{
    const description=req.body.description
    const done=req.body.done
    await TodoModel.create({
        description:description,
        done:done,
        userId:req.userId
    })

    res.json({"message":"todo added succesfully"})
})

app.get('/todos',logger,auth,async (req,res)=>{
    const userId=req.userId
    const response = await TodoModel.find({
        userId:userId
    })
    if(response){
        res.json(response)
    }
    
})

app.post('/todo',logger,auth,async(req,res)=>{
    const index=parseInt(req.index)


})


app.listen(3000,()=>{console.log("http://localhost:3000/")})

function auth(req,res,next){
    let token=req.headers.token
    let response=jwt.verify(token,JWT_SECRET)
    if(response){
        req.userId=response.id
        next()
    }
    else{
        res.status(403).json({"message":"Unauthorized acess"})
    }
}

function logger(req,res,next){
    console.log(req.method+" "+req.url)
    next()
}