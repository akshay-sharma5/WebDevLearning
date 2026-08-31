const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()


const {userRouter}=require('./routes/user.js')
const {courseRouter}=require('./routes/course.js')
const {adminRouter}=require('./routes/admin.js')

const app=new express()

app.use(express.json())

app.post('/',(req,res)=>{

})

app.use('/user',userRouter)

app.use('/course',courseRouter)

app.use('/admin',adminRouter)

async function main(){
    await mongoose.connect(process.env.MONGO_CON)
    console.log("DB connected")
    app.listen(3000,()=>{
    console.log("http://localhost:3000")
})

}

try{
    main()
}catch(e){
    console.log("Cant connect to db")
}

