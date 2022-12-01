import {useEffect, useState} from "react";

export default function Hook1(){
   const [title,setTitle] = useState("welcome Hook");
   const [msg,setMsg] = useState("hai")
    useEffect(()=>{
        document.title = title;
    },[msg]);

    function changeTitle(){
        setTitle("Welcome to Use Effect Hook");
    }
    function changeMessage(){
        setMsg("Dependancy useEffect")
    }
    return(
        <div>
            <h1>UseEffect Hook</h1>
            <h2>{title}</h2>
            <h3>{msg}</h3>
            <button onClick={changeTitle}>Change</button>
            <button onClick={changeMessage}>Change message</button>
        </div>
    )
}