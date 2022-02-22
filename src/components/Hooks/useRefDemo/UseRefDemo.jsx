import { useRef,useState } from "react";
const UseRefDemo=()=>{

    // console.log("Hiii")
    const [text,setText]=useState("Vaibhav")

    const para=useRef();
    const val=useRef();
    console.log(val.current.value   )

    // const val=useRef();
    const getValue=()=>{
        para.current.innerText = "Changed"
        // setText(t=> t === "Vaibhav" ? "Vikas" : "Vaibhav")
    }
    return(
        <div>
           {/* <input type="text" ref={val} onBlur={()=> console.log(val.current.value)} /> */}
            <button onClick={getValue}>click Me</button> 
              <h1 ref={para}>Off</h1> 
              <input type="text" ref={val}/>
            {/* <button onClick={(e)=> console.log(para.current.innerText)}>click Me</button> 
            <h1>{text} Sontakke</h1> */}
        </div>
    )
}
export default UseRefDemo;