import { useState ,useRef} from 'react'

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  const timer=useRef()

  function startCounter(){
    let value =setInterval(()=>{
      setCount(count=>count+1)
    },100)
    timer.current=value
  }

  function stopCounter(){
    clearInterval(timer.current)
  }

  // const inputRef=useRef()

  // function focusOnInput(){
  //   inputRef.current.focus()
  // }

  return (
    <>
  <h1>{count}</h1>
    <button onClick={startCounter}>start</button>
    <button onClick={stopCounter}>Stop</button>

  {/* <input type="text" ref={inputRef} />
  <button onClick={focusOnInput}>submit</button> */}
    </>
  )
}


export default App
