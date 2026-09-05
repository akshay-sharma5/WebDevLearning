import { useState ,createContext,useContext} from 'react'

import './App.css'


const BulbContext=createContext()
 //Putting Context api logic in a function

  function BulbProvider({children}){
     //Context api 
  const[bulbOn,setBulbOn]=useState(true)
    return <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>

      {children}
 </BulbContext.Provider>

  }

function App() {
 
  //Prop drilling
  //const[bulbOn,setBulbOn]=useState(true)

 


  return (

    //Prop drilling logic
    // <LightBulb/>

    //Context api

    <BulbProvider>

        <LightBulb/>


    </BulbProvider>

    

   
    
  )
}


function LightBulb(){ 
  //Prop Drilling logic
  // const[bulbOn,setBulbOn]=useState(true)


  

  return(
    // <>
    // <BulbState bulbOn={bulbOn}/>
    // <br />
    // <ToggleBulb setBulbOn={setBulbOn}/>
    // </>

    <>
    <BulbState/>
      <ToggleBulb/>
    </>
  )
}

//Prop drilling - function BulbState({bulbOn})

function BulbState(){

  const{bulbOn} = useContext(BulbContext)

  return (
  <>
  {bulbOn? <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifaZ_Sj-CSpSsyE-GnQ7HX8U7gor8NpmARJqQrTOkbw&s=10' width="200px"/>:<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_Qp9uVK2ifurEzl1vD0Uu8f_JMoc2hDQWbLVCa2FfA&s=10' width="200px"/>}
  </>
  )

}

//Prop drilling logic
//function ToggleBulb({setBulbOn})

function ToggleBulb(){

  const {setBulbOn} = useContext(BulbContext)

  function toggle(){
    setBulbOn(curentvalue=>!curentvalue)
  }
return(
  <button onClick={toggle}>toggle switch</button>
)
}



export default App
