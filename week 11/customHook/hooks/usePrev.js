import {useRef,useEffect} from 'react'

export function usePrev(value){
    const state=useRef()

    useEffect(()=>{

        state.current=value

    },[value])

    return state.current

}