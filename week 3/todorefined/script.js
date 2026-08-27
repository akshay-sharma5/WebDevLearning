

    //state 
    let todos=[]
    function addTodo()
    {
        todos.push({
            title:document.querySelector("input").value
        })
        
        render()
    }

    function deleteTodo(index)
    {
        todos.splice(index,1)
        render()
    }

    function createTodoComponent(todo,i)
    {
        let div=document.createElement("div")
            let h4=document.createElement("h4")
            let btn=document.createElement("button")
            btn.innerHTML="Delete"
            btn.onclick = () => deleteTodo(i);
            h4.innerHTML=(i+1)+"."+todo.title
            div.style="display:flex"
            div.appendChild(h4)
            div.appendChild(btn)
            return div
    }
    function render()
    {
        let todo=document.getElementById("todoss")
        todo.innerHTML=""
        for(let i=0;i<todos.length;i++){
            
           div= createTodoComponent(todos[i],i)
            todo.appendChild(div)
            
    }
    }