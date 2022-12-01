import { useReducer } from "react"

const reducer = (state,action)=>{
    switch(action.type){
        case "increment":
           return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return 0;
        default:
            return 0;

    }
}

export default function ReducerHook1(){
   
    const [count,dispatch]= useReducer(reducer,10);

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}