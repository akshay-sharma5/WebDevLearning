import express from 'express'

const app = express()
let todo=[
  {
    "id":1,
    "task":"Go to college"
  }
]
app.use(express.text());
app.get('/', (req, res) => {

  res.send(printtodo(todo))
})

app.post('/', (req, res) => {

  let task=req.body
  addTodo(task)
  res.send('Task added successfully')
})

app.delete('/', (req, res) => {
let d=req.body
  deleteTodo()
  res.send('todo deleted successfully')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

function printtodo(todo)
{
  let list=""
    for(let i=0;i<todo.length;i++)
    {
      list+=todo[i].task+"<br>"
    }
    return list
}

function addTodo(newtask)
{
  let t={
    "id":todo.length+1,
    "task":newtask
  }
  todo.push(t)
}

function deleteTodo(d)
{
  todo.splice((d-1),1)
}