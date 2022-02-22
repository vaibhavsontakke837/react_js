import { useState, useEffect } from "react"
const useCustomHook=(flag)=>{
     //logic
     const [counter,setCounter]=useState(2)
   
    useEffect(()=>{
        setInterval(() =>{
            // setCounter(flag === true ? counter => counter + 1 : counter => counter - 1)
            setCounter(flag === "ADD" ? counter => counter + 1 
                        :flag === "SUB" ? counter => counter - 1
                        :flag === "MUL" ? counter => counter * 2
                        :flag === "DIV" ? counter => counter / 2
                        :" ")
        },1000)
    },[])

    // setInterval(() => setCounter(e =>), 1000);
    return counter;
 }
 export default useCustomHook;