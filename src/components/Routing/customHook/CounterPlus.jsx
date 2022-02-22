
// import { useState , useEffect } from "react";
import useCustomHook from "../../customHook/useCustomHook";
const CounterPlus=()=>{

    const counter=useCustomHook("ADD");
    const mulCounter=useCustomHook("MUL");
    const divCounter=useCustomHook("DIV");

    // const [counter,setCounter]=useState(0)
    // useEffect(()=>{
    //     setInterval(() =>{
    //         setCounter(counter => counter + 1)
    //     },1000)
    // },[])

    return(
        <div>
            <h2>Counter Increment : {counter}</h2>
            <h2>Counter Miltiplication : {mulCounter}</h2>
            <h2>Counter Division : {divCounter}</h2>
        </div>
    )
}
export default CounterPlus;