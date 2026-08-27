//Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
import express from 'express'
const app=new express

function logRequest(req,res,next){
    console.log("Request method : "+req.method)
    console.log("url : "+req.url)
    let date=new Date().toLocaleTimeString()
    console.log(date)
    next()
}

app.get('/special',logRequest,(req,res)=>{
    res.send("Middleware request sent")
})

app.get('/',logRequest,(req,res)=>{
    res.send("Middleware request sent")
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})