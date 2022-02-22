// import { useState ,useEffect} from "react"
import useCustomHook from "../../customHook/useCustomHook"
const CounterMinus=()=>{

    const counter=useCustomHook("SUB");
   

    // const [counter,setCounter]=useState(0)
    // useEffect(()=>{
    //     setInterval(() =>{
    //         setCounter(counter => counter - 1)
    //     },1000)
    // },[])

    return(
        <div>
            <h2>Counter Decrement : {counter}</h2>
           
        </div>
    )
}
export default CounterMinus;