import express from 'express'
const app=new express() 

app.use(function(req, res, next) {
    // req.name="Akshay"     //modifying req object
    // console.log("request received");
    // next();

    //Ending req res cycle
    res.json({
        message: "You are not allowed"
    })
})

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})