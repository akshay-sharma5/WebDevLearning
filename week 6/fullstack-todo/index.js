const fs=require('fs')
const express=require('express')
const jwt=require('jsonwebtoken')
const e = require('express')
const app=new express()

const JWT_SECRET="TODOLISTJWTSECRET"
let users=JSON.parse(fs.readFileSync("users.json","utf-8"))

app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/login.htm")
})

app.post('/signup',(req,res)=>{
    let username=req.body.username
    let password=req.body.password
    let un=users.find(u=>u.username===username)
    if(un){
        res.send({"message":"User already exist"})
    }
    users.push({
        "username":username,
        "password":password,
        "todolist":[]
    })
    res.send({"message":"Signed up succesfully"})
})

app.post("/signin",(req,res)=>{
    let username=req.body.username
    let password=req.body.password
    let user=users.find(u=>u.username===username && u.password===password)

    if(user){
        const token=jwt.sign({"username":username},JWT_SECRET)
        res.send({"message":"Sign in successful",
            "token":token})
    }
    else{
        res.send({"message":"Invalid user"})
    }
})

app.post('/todo',auth,(req,res)=>{
    const username=req.username
    const user=users.find(u=>u.username===username)
    if(user){
        res.send(user.todolist)
    }
    else{
        res.send([])
    }
})
app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})

function auth(req,res,next){
    const token=req.headers.token
    const deoded=jwt.verify(token,JWT_SECRET)
    let user=users.find(u=>"username"===decoded.username)
    if(user){
        req.username=user.username
        next()
    }else{
        res.status(403).send({"message":"Unauthorized acess"})
    }
}