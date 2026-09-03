import { useState, useEffect } from 'react'

import './App.css'



function App(){

const [currentTab,setTab]=useState(1);

const [todo,setTodo]=useState({})

const [loading,setLoading]=useState(true)


  useEffect(()=>{
    setLoading(true)
    fetch("https://dummyjson.com/todos/"+currentTab).then(async(res)=>{
      
      const json=await res.json()
      setTodo(json.todo)
      setLoading(false)
    })
    
    
  },[currentTab])



  return (
    <div>
      <button onClick={()=>setTab(1)} style={{color:currentTab == 1 ? 'red':'black', margin:'10px'}}>ToDo # 1</button>
      <button onClick={()=>setTab(2)} style={{color:currentTab == 2 ? 'red':'black' ,margin:'10px'}}>ToDo # 2</button>
      <button onClick={()=>setTab(3)} style={{color:currentTab == 3 ? 'red':'black' ,margin:'10px'}}>ToDo # 3</button>
      <button onClick={()=>setTab(4)} style={{color:currentTab == 4 ? 'red':'black' ,margin:'10px'}}>ToDo # 4</button>
      <button onClick={()=>setTab(5)} style={{color:currentTab == 5 ? 'red':'black' ,margin:'10px'}}>ToDo # 5</button>
      <button onClick={()=>setTab(6)} style={{color:currentTab == 6 ? 'red':'black' ,margin:'10px'}}>ToDo # 6</button>
      <button onClick={()=>setTab(7)} style={{color:currentTab == 7 ? 'red':'black' ,margin:'10px'}}>ToDo # 7</button>
      <button onClick={()=>setTab(8)} style={{color:currentTab == 8 ? 'red':'black' ,margin:'10px'}}>ToDo # 8</button>
      <button onClick={()=>setTab(9)} style={{color:currentTab == 9 ? 'red':'black' ,margin:'10px'}}>ToDo # 9</button>
      
    
      <br />
      {loading?"Loading.....":todo}
    </div>
  )
}



export default App
