import { useState } from 'react'

import './App.css'

function App() {

  return (
    <div>
      <Counter>

      </Counter>

    </div>
  )
}

function Counter(){

  const [count,setCount]=useState(0)

  setInterval(()=>{
    let time=new Date().toLocaleTimeString()
     setCount(time)

  },1000)

 

  return (
    <div>
      <div id='c'>{count}</div>
      

    </div>
  )
  
}

export default App
