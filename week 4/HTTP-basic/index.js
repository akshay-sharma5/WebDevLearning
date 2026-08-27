const express =require('express')
const app=express()
app.get("/",(req,res)=>{
    let n=req.query.n
    res.send(calculateSum(n))
})

function calculateSum(n)
{
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum
}

app.listen(3000)