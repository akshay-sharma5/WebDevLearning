// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

let count=0;
import express from 'express'
const app=new express
app.use(logRequest)

function logRequest(req,res,next){
    console.log("Request method : "+req.method)
    console.log("url : "+req.url)
    let date=new Date().toLocaleTimeString()
    console.log(date)
    count++
    req.count=count
    next()
}

app.get('/special',logRequest,(req,res)=>{
    
    res.send("Middleware request sent")
})

app.get('/stats',logRequest,(req,res)=>{
    res.send("Number of request sent "+req.count)
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})