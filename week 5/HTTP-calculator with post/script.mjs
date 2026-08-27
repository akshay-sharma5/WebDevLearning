import express from 'express'

const app=new express()
app.use(express.json())
app.post('/add',(req,res)=>{

    let a =Number(req.body.a)
    let b=Number(req.body.b)
    console.log(req.body)
    res.send((a+b))
})


app.post('/mult',(req,res)=>{
    let a =Number(req.body.a)
    let b=Number(req.body.b)
    res.send((a*b))
})

app.post('/sub',(req,res)=>{
    let a =Number(req.body.a)
    let b=Number(req.body.b)
    console.log(req.body)
    res.send((a-b))
})


app.post('/div',(req,res)=>{
    let a =Number(req.body.a)
    let b=Number(req.body.b)
    console.log(req.body)
    res.send((a/b))
})

//dynamic route handler
app.get('/add/:a/:b',(req,res)=>{
    let a =Number(req.params.a)
    let b=Number(req.params.b)
    res.send((a+b))
})
app.listen(3000)