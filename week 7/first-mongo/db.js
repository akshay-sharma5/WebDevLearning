const mongoose=require('mongoose')

async function connectDb(){
    await mongoose.connect('mongodb+srv://akshaysharmas2305_db_user:ZVPArB3ED7E6y4kX@cluster0.8ramrmo.mongodb.net/todo-app-database')
}

try{
    connectDb()
}
catch(e){
    console.log("db not connected")
}

const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId

const User=new Schema({
    email:{type:String ,unique:true},
    password:String,
    name:String

})

const Todo=new Schema({
    description:String,
    done:Boolean,
    userId:ObjectId
    
})

const UserModel=mongoose.model('users',User)

const TodoModel=mongoose.model('todos',Todo)

module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel,
    connectDb:connectDb
}