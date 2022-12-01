import {useEffect, useRef, useState} from "react";

export default function RefHook1(){
   const count = useRef(0);
   const [inputValue, setInputValue]  = useState("")
   useEffect(()=>{
    count.current = count.current + 1;
   })
    return(
        <div>
            <h1>Use Ref Hook</h1>
            <h2>{count.current}</h2>
            <input type="text" value={inputValue} onChange={((e)=>setInputValue(e.target.value))}></input>
        </div> 
    )
}