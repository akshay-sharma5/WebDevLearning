import { Command } from "commander";
import fs from "fs"

const program=new Command()
const todo=JSON.parse(fs.readFileSync("todos.json","utf-8"))

program
.name("todolist")
.description("CLI to a todo list")
.version("v1.0.0")

program.command('addtodo')
.description("This command adds a todo")
.argument("new entry string")
.action((task)=>{
    let newtodo={
        "task":task,
        "completed":false
    }
    todo.push(newtodo)
    console.log("Task added successfully")

    fs.writeFileSync("todos.json",JSON.stringify(todo))

})

program.command('deletetodo')
.description("Delete task from todolist")
.argument("task number")
.action((taskno)=>{
    todo.splice(taskno-1,1)
    console.log("task deleted successfully")
    fs.writeFileSync("todos.json",JSON.stringify(todo))
})

program.command('donetodo')
.description("mark a task done")
.argument("task number")
.action((taskno)=>{
    todo[taskno-1].completed=true
    console.log("task done successfully")
})

program.command('print')
.description("print todolist")
.action(()=>{
    for(let i=0;i<todo.length;i++)
    {
        if(todo[i].completed==false)
        {
            console.log(todo[i].task +" X")
        }
        else
        {
            console.log(todo[i].task +" \/")
        }
    }
    fs.writeFileSync("todos.json",JSON.stringify(todo))
})

program.parse()