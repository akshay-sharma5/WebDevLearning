import { useState ,useEffect,useRef} from 'react'

import './App.css'

import {useFetch} from '../hooks/useFetch'

import {usePrev} from '../hooks/usePrev'


//useFetch
// function App() {
  
//   const [currentPost,setPost] =useState(1)


//     const {Data,loading}= useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost)
  
//     if(loading){
//       return <><h1>Loading.....</h1></>
//     }

//   return (
//     <>
//     <button onClick={()=>setPost(1)}>1</button>
//     <button onClick={()=>setPost(2)}>2</button>
//     <button onClick={()=>setPost(3)}>3</button>
//     <button onClick={()=>setPost(4)}>4</button>
//     <button onClick={()=>setPost(5)}>5</button>
//     <br />
//   {JSON.stringify(Data)}
//     </>
//   )
// }


//usePrev
// function App(){
//   const [count,setCount]=useState(0)

//   const pre=usePrev(count)


//   return( 
//     <>
//     <h1>Count: {count}</h1>
//     <button onClick={()=>setCount(c=>c+1)}>increase</button>
//     <h1>Prev value :{pre}</h1>
//     </>
//   )
// }


//useDebounce
function useDebounce(value,delay){
  const [debouncedValue,setDebouncedValue]=useState(value)

  useEffect(()=>{
    const clock=setTimeout(()=>{
    setDebouncedValue(value);
    },delay)
    return ()=>{
      clearTimeout(clock)
    }
  },[value,delay])

  return debouncedValue
}


function App(){

  const [inputValue,setInputValue]=useState("")

  const debouncedValue=useDebounce(inputValue,200)

  useEffect(()=>{
    console.log("expensive operation")
  },[debouncedValue])

  function change(e){
    setInputValue(e.target.value)
  
}



  return(
    <>
    <input type="text" onChange={change} />
    </>
  )
}

export default App
