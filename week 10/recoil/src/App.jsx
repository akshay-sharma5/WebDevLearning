import { useState } from 'react'

import './App.css'

import {atom, RecoilRoot ,useSetRecoilState, useRecoilValue} from 'recoil'

const count=atom({
  key:'countState',
  default:0
})

function Parent(){

  return (

    <RecoilRoot>

      <IncreaseValue/>
      <DecreaseValue/>
      <CountValue/>

    </RecoilRoot>

  )

}

function IncreaseValue(){

  const setCount=useSetRecoilState(count)
  return(
    <button onClick={()=>{setCount(count=>count+1)}}>Increase count</button>
  )
}


function DecreaseValue(){

  const setCount=useSetRecoilState(count)
  return(
    <button onClick={()=>{setCount(count=>count-1)}}>Decrease count</button>
  )
}

function CountValue(){

  const countvalue=useRecoilValue(count)

  return(
    <h1>{countvalue}</h1>
    
  )
}

function App() {

  return (
<>
<Parent/>
</>
  )
}

export default App
