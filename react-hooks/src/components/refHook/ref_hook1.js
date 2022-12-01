import {useRef, useState} from "react";

export default function RefHook1(){
    const inputRef = useRef("");
    const [text,setText] = useState("");

    function submit(){
        setText(inputRef.current.value)
    }

    return(
        <div>
            <h1>Use Ref Hook</h1>
            <input type="text" placeholder="Enter your text here" ref={inputRef}></input>
            <button onClick={submit}>Click</button>
            <p>{text}</p>
        </div> 
    )
}