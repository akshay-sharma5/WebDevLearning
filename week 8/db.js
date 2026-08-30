const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({

    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const adminSchema=new Schema({

    email:String,
    password:String,
    firstName:String,
    lastName:String
})

const courseSchema=new Schema({
    
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:{type:mongoose.Types.ObjectId,ref:'admins'}

})

const purchaseSchema=new Schema({
    
    courseId:{type:mongoose.Types.ObjectId,ref:'courses'},
    userId:{type:mongoose.Types.ObjectId,ref:'users'}
})

const adminModel=mongoose.model('admins',adminSchema)
const courseModel=mongoose.model('courses',courseSchema)
const userModel=mongoose.model('users',userSchema)
const purchaseModel=mongoose.model('purchases',purchaseSchema)

module.exports={
    adminModel:adminModel,
    courseModel:courseModel,
    userModel:userModel,
    purchaseModel:purchaseModel
}