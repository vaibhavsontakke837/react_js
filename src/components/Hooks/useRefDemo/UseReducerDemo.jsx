import { useReducer } from "react";

const reducer=(state,action)=>{
    // console.log(state)
    console.log(action)
    // return state
    // if(action.type === "Increment"){
    //    return state + 1
    // }
    // if(action.type === "Decrement"){
    //    return state - 1
    // }
    // if(action.type === "Multiplication"){
    //     return state * 2
    // }
    // if(action.type === "Division"){
    //     return state / 2
    // }
    switch(action.type){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        case "Multiplication":
            return state * 2
        case "Division":
            return state / 2
    }
}

const useReducerDemo=()=>{

    const [count,setCount]=useReducer(reducer,0)
    
    return(
        <div>
            <h1>useReducer Component</h1>
            <h1>Counter : {count}</h1>
            <button onClick={()=> setCount({type:"Increment"})}>+ Increment</button>
            <button onClick={()=> setCount({type:"Decrement"})}>- Decrement</button>
            <button onClick={()=> setCount({type :"Multiplication"})}>* Multiplication</button>
            <button onClick={()=> setCount({type:"Division"})}>/ Division</button>
        </div>
    )
}
export default useReducerDemo;