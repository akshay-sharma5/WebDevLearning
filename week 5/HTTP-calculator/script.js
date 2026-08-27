const express=require("express")
const cors=require("cors")

const app=new express()
app.use(express.json())
app.use(cors())

app.post('/add',(req,res)=>{
    let a =Number(req.body.a)
    let b=Number(req.body.b)
    res.send((a+b))
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.htm")
})
app.get('/mult',(req,res)=>{
    let a =Number(req.query.a)
    let b=Number(req.query.b)
    res.send((a*b))
})

app.get('/sub',(req,res)=>{
    let a =Number(req.query.a)
    let b=Number(req.query.b)
    res.send((a-b))
})


app.get('/div',(req,res)=>{
    let a =Number(req.query.a)
    let b=Number(req.query.b)
    res.send((a/b))
})

//dynamic route handler
app.get('/add/:a/:b',(req,res)=>{
    let a =Number(req.params.a)
    let b=Number(req.params.b)
    res.send((a+b))
})
app.listen(3000)