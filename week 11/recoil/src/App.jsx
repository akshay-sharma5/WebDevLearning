import './App.css'
import {useAtom,useAtomValue,useSetAtom} from 'jotai'

import { counterAtom ,evenSelector} from './store/atoms/counter'

function App() {
  
 

  return (
    <div>
    
    <Counter/>
    
    </div>
  )
}

function Counter(){
  return (
    <div>
      <CounterValue/>
      <Increase/>
      <Decrease/>      
    </div>
  )
}

function Increase(){
  
  const setCount=useSetAtom(counterAtom)
  

  return(
    <>
      <button onClick={()=>setCount(c=>c+1)}>inc</button>
    </>
  )


}

function Decrease(){
  const setCount=useSetAtom(counterAtom)

  return(
    <>
      <button onClick={()=>setCount(c=>c-1)}>dec</button>
    </>
  )


}

function CounterValue(){
  const count=useAtomValue(counterAtom)

  const isEven=useAtomValue(evenSelector)

  return(
    <>
    <h1>Count: {count}</h1>
    <h1>is Even: {isEven?"true":"false"}</h1>
    </>
  )

}
export default App
