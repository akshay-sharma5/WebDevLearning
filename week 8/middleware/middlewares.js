const jwt=require('jsonwebtoken')

function authUSER(req,res,next){
    const token=req.headers.token
    let verify=jwt.verify(token,process.env.JWT_USER)

    if(verify){
        req.userId=verify.id
        console.log(req.userId)
        next()
    }else{
        res.json({"message":"unauthorized access"})
    }
}

function authADMIN(req,res,next){
    const token=req.headers.token
    let verify=jwt.verify(token,process.env.JWT_ADMIN)

    if(verify){
        req.userId=verify.id
        console.log(req.userId)
        next()
    }else{
        res.json({"message":"unauthorized access"})
    }
}

function logger(req,res,next){
    console.log(req.method,+" " +req.url)
    next()
}

module.exports={
    authUSER:authUSER,
    authADMIN:authADMIN,
    logger:logger
}