import {useEffect, useState} from "react";

export default function Hook1(){
   const [title,setTitle] = useState("welcome Hook");

    useEffect(()=>{
        document.title = title;
    });

    function changeTitle(){
        setTitle("Welcome to Use Effect Hook");
    }
    return(
        <div>
            <h1>UseEffect Hook</h1>
            <h2>{title}</h2>
            <button onClick={changeTitle}>Change</button>
        </div>
    )
}