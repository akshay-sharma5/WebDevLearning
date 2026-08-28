const express =require('express')

const jwt= require('jsonwebtoken')
const JWT_SECRET="JWT_SECRET_STRING"
const app=new express()

let users=[]

app.use(express.json())

app.post('/signup',(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    users.push({
        username,
        password
    })

    res.send({
        "message":"you have signed up"
    })

})


app.post('/signin',(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const user=users.find(user =>user.username===username && user.password===password)

    if(user){
        const token=jwt.sign({"username":username},JWT_SECRET)
        res.send({token})
    }
    else{
        res.status(403).send({"message":"Invalid Username or password"})
    }

})

app.get('/me',(req,res)=>{
    const token=req.headers.token
    const username=jwt.verify(token,JWT_SECRET).username
    let user=users.find((u)=>u.username===username)
    if(user){
        res.send({
            "name":user.username,
            "password":user.password
        })
    }
    else{
        res.send({"message":"Invalid token"})
    }
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})

