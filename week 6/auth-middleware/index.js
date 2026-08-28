const express = require('express')
const jwt= require('jsonwebtoken')
const JWT_SECRET="JWT_SECRET"

const app=new express()

let users=[]
function auth(req,res,next){
    const token=req.headers.token
    if(token){
        jwt.verify(token,JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401).send({"message":"Unauthorized"})
            }
            else{
                req.username=decoded.username
                console.log(decoded)
                next()
            }
        
        })
    }
    else{
        next()
    }

}

function logger(req,res,next){
    console.log(req.method +"method")
    next()
}

app.use(express.json())


app.post('/signup',logger,(req,res)=>{
    let username=req.body.username
    let password=req.body.password
    users.push({
        "username":username,
        "password":password
    })
    res.send({
        "message":"User added succesfully"
    })
    console.log(users)
})

app.post('/signin',logger,(req,res)=>{
    let username=req.body.username
    let password=req.body.password

    let user=users.find(u=>u.username===username &&  u.password==password)
    if(user){
        const token=jwt.sign({"username":username},JWT_SECRET)
        res.send({
            "token":token
        })
        console.log({"token":token})
        
    }
    else{
        res.send({"message":"Invalid username or password"})
    }
})

app.get('/me',logger,auth,(req,res)=>{
    const user=req.username
    res.send({"username":user})
    
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend-login/index.htm")
})

app.get('/loggedin.htm',(req,res)=>{
    res.sendFile(__dirname+"/frontend-login/loggedin.htm")
})


app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})