import express from 'express'
import fs from 'fs' 
const app=express()

app.get('/:filename',(req,res)=>{
    let file=req.params.filename
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err)
        {
            res.status(404).send("File not found")
        }
        else
        {
            res.send(data)
        }
    })
    

})
app.listen(3000)