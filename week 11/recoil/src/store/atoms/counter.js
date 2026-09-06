 import { atom } from 'jotai'

 export const counterAtom=atom(0)

 export const evenSelector=atom((get)=>{
    const count=get(counterAtom)
    return count % 2 == 0
 })


