import express from 'express'
const app=new express()

//Middleware function
function logRequest(req,res,next){
    console.log("Request made to "+req.url)
    next()
}

app.get('/special',logRequest,(req,res)=>{
    res.send("This uses route specific middlware ")
})

app.get("/sum",logRequest, function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000,()=>{
    console.log("server running on port 3000")
})