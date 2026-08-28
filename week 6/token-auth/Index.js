const express =require('express')

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
        const token=generateToken()
        user.token=token
        res.send({token})
        console.log(users)
    }
    else{
        res.status(403).send({"message":"Invalid Username or password"})
    }

})

app.get('/me',(req,res)=>{
    const token=req.headers.token
    let user=users.find((u)=>u.token===token)
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


function generateToken(){
    let token=""
    let options=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(let i=0;i<32;i++){
        token+=options[Math.floor(Math.random()*options.length)]
    }

    return token
}