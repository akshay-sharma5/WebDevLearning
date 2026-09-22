import { useRef } from 'react'

export function Otp(){

    const ref1=useRef()
    const ref2=useRef()
    const ref3=useRef()
    const ref4=useRef()
    const ref5=useRef()
    const ref6=useRef()

    return (
        <div className="flex justify-center">
        <SubOtpubOtp refenrence={ref1}  onDone={()=> ref2.current.focus()}/>
        <SubOtpubOtp refenrence={ref2} goBack={()=>ref1.current.focus()} onDone={()=> ref3.current.focus()}/>
        <SubOtpubOtp refenrence={ref3} goBack={()=>ref2.current.focus()} onDone={()=> ref4.current.focus()}/>
        <SubOtpubOtp refenrence={ref4} goBack={()=>ref3.current.focus()} onDone={()=> ref5.current.focus()}/>
        <SubOtpubOtp refenrence={ref5} goBack={()=>ref4.current.focus()} onDone={()=> ref6.current.focus()}/>
        <SubOtpubOtp refenrence={ref6} goBack={()=>ref5.current.focus()} />
    </div>
    )
    
}

function SubOtpubOtp({refenrence,onDone ,goBack}){
    return(
        <div>
        <input
            ref={refenrence}
            onChange={(e)=>{
                if(e.target.value){
                    onDone?.()
                }
            }}
            onKeyDown={(e)=>{
                if(e.key === 'Backspace' && e.currentTarget.value === ''){
                    goBack?.()
                }
            }}
            type="text"
            maxLength={1}
            className="w-10 h-10 px-4 rounded-2xl bg-blue-800 mx-1 text-white outline-none"
        />
    </div>
    )

}