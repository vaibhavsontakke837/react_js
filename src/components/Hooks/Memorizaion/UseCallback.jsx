 import { useState ,useCallback ,useMemo  } from "react";
 import AA from "./AA";

 const UseCallback=()=>{

    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    //useCallback
    const randomNumber=useCallback(()=>{
        console.log(Math.floor(Math.random()*10))
    },[])

    //useMemo()

    const name=useMemo(()=>{
        // console.log("ggiii")
        return ["Vaibhav","Rahul"]
    },[])

    // const name=["Vaibhav","Rahul"];
    // console.log(name)
    // useEffect(()=>{
    //     console.log(name)
    // },[])
     return(
         <div>
             <h1>Callback component</h1>
             <AA randomNumber={randomNumber} count1={count1} name={name}/>
             <h2>Count 2 : {count2}</h2>
             <button onClick={()=> setCount1(e => e + 1)}>AA Cmp (count 1)</button>
             <button onClick={()=> setCount2(e => e + 1)}>count 2</button>
         </div>
     )
 }
 export default UseCallback;