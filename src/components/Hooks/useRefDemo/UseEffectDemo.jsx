import { useEffect, useState } from "react"

const UseEffectDemo = () => {

    const [Flag,setFlag]=useState("OFF");
    const [Flag1,setFlag1]=useState("OFF");

    useEffect(()=>{
        console.log("hi, Welcome to UseEffectDemo Component..!");

        fetch("https://api.covid19api.com/summary")
        .then(res => res.json())
        .then(data => console.log(data)
        )
    },[])

    useEffect(()=>{
        console.log("Inside useEffect2");
        console.log("May Be Second Flag Changed")
    },[Flag,Flag1])

    //count
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setCount(count+1)
        },1000)
    })



  
    return (
        <div>
            <h1>useEffect : {Flag}</h1>
            <button onClick={()=> setFlag(flag => flag === "OFF"?"ON":"OFF")}>Click ME</button>
            <h2>useEffect : {Flag1}</h2>
            <button onClick={()=> setFlag1(flag1              => flag1==="OFF"?"ON":"OFF")}>Click ME</button>
            {/* <h1>you entered {count} times.</h1>
            <button onClick={()=> setCount(count + 1)}>+ Increment</button> */}
        </div>
    )
}
export default UseEffectDemo