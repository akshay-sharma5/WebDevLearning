const express =require('express')

const zod =require('zod')

const {UserModel,TodoModel,connectDb} =require('./db')

const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt')

const app=new express()

app.use(express.json())

JWT_SECRET="JWT_SECRET"


app.post('/signup',logger,async (req,res)=>{
const verifyFormat=zod.object({
    "email":zod.string().email().min(3).max(30),
    "password":zod.string().min(6).max(30),
    "name":zod.string().min(3).max(30)
})
 
const email=req.body.email
const password=req.body.password
const name=req.body.name

const verifyFormatSuccess=verifyFormat.safeParse(req.body);

if(!verifyFormatSuccess.success){
    console.log(verifyFormatSuccess.error)
    return res.json({"message":verifyFormatSuccess.error.issues.map(issue=>issue.message)})
}

const response=await UserModel.findOne({
        email:email,
    })
    if(response){
        return res.json("user already exist")
    }

    const hashedPassword=await bcrypt.hash(password,10)

await UserModel.create({
    email:email,
    password:hashedPassword,
    name:name
})

res.json({"message":"You are signed up"})

})

app.post('/signin',logger,async (req,res)=>{
    const email=req.body.email
    const password=req.body.password

    const response=await UserModel.findOne({
        email:email
    })

    if(response){
        const verify=await bcrypt.compare(password,response.password)
        console.log(verify)

        if(verify){
            const token=jwt.sign({id:response._id.toString()},JWT_SECRET)
            res.json({"message":"You are succesfully signed in",
            "token":token
        })
        }
        else{
            res.json({"message":"incorrect password"})
        }

        
    }else{
        res.json({"message":"User not found"})
    }
    
})

app.post('/todo',logger,auth,async(req,res)=>{
    const description=req.body.description
    const done=req.body.done
    const response = await TodoModel.find({
        userId:req.userId
    })
    const count=response.length
    await TodoModel.create({
        todoId:count,
        description:description,
        done:done,
        userId:req.userId
    })

    res.json({"message":"todo added succesfully"})
})

app.get('/todos',logger,auth,async (req,res)=>{
    const userId=req.userId
    const response = await TodoModel.find({
        userId
    }).populate('userId').exec()
    if(response){
        res.json(response)
    }
    
})

app.put('/done',logger,auth,async(req,res)=>{
    const index=req.body.todoId
    const target = await TodoModel.updateOne({userId:req.userId,"todoId":index},{$set:{"done":true}})
    
    if(target){
        res.send({"message":"marked task done! "})
    }
    else{
        res.send({"message":"Invalid todoId"})
    }

})

app.delete('/delete',logger,auth,async(req,res)=>{
    const index=req.body.todoId
    const target=await TodoModel.deleteOne({userId:req.userId,"todoId":index})
    if(target.deletedCount > 0 ){
        console.log(target)
        res.send({"message":"Todo deleted succesfully"})
    }
    else{
     res.send({"message":"Invalid index"})
    }
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