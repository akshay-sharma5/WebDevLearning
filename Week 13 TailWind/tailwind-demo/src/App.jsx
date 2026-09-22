import { useState } from 'react'

import logo from './assets/logo.png'

import {Button} from './components/Button'

import { Input } from './components/Input'

import './App.css'
import { Otp } from './components/Otp'

function App() {

  const[step,setStep]=useState('email')

  return (
  <>
  <MainUI/>
  </>
  )
}


function AgeVerify({nextStep}){
  const [age,setAge] = useState('')

  const isDisabled = age.trim()===''


  return (
    
    <div className='flex px-20 flex-col mx-30'>
      <p className='py-12 text-3xl font-bold text-white'>Verify your age</p>
      <p className='text-blue-400 py-5'>Please confirm your data would not be stored</p>
      <Input placeholder="Enter your age" type="number" onChange={(e)=>setAge(e.target.value)}/>
      <Button disabled={isDisabled} onClick={nextStep}>Verify Age</Button>
    </div>
  )
}

function Top(){
  return(
      <div className='flex justify-center py-20 '> 
      <img src={logo} className='w-13 h-13' />
      <p className='text-green-300 px-5 text-4xl'>Webinar.gg</p>
      </div>
  
  )
}


function Email({nextStep}){

  const [email,setEmail]=useState('')

  const isDisabled= email.trim()===''

  return (
    <div className='flex px-20 flex-col mx-30'>
      <p className='py-12 text-3xl font-bold text-white'>Enter your email</p>
      <Input placeholder="Enter your email" type="text" onChange={(e)=>setEmail(e.target.value)}/>
      <Button disabled={isDisabled} onClick={nextStep}>Continue</Button>
    </div>
  )
}

function MainOtp(){
  return(
    <>
    <Otp number={6} />
    <Button disabled={false} >Verify</Button>
    </>
  )
}

function Landing(){
  return(
    <div className='h-screen bg-blue-950 px-80 '>
    <Top/>
    {step==='email'&& <Email nextStep={()=>setStep('age')}/>}
    {step==='age' &&<AgeVerify nextStep={()=>setStep('otp')}/>}
    {step==='otp' && <MainOtp/>}

    
  </div>
  )
}

function MainUI(){
  return(
    <div className='flex'>
      <div className='transition-all duration-1000 bg-pink-400 h-screen md:w-60 w-0  '>SideBar</div>
      <div className='bg-yellow-300 flex-1 h-screen'>Content</div>
    </div>
  )
}
export default App
