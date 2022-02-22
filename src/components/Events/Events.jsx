import { useState } from "react/cjs/react.development"

const Events = () =>{
    
    const[bgColor,setBgColor]=useState("#db2b1f")
    const[change,setChange]=useState("Click Me")

    const changeMe=()=>{
        setBgColor("#10de65")
        setChange("Double Click Me")
    }

    const dbClickMe=()=>{
        setChange("Click Me")
        setBgColor("#db2b1f")
    }
    return(
        <div style={ { textAlign:"center",height:"100vh",backgroundColor:bgColor } }>
            <h1>Events Demo</h1>
            <button onClick={changeMe} onDoubleClick={dbClickMe}>{change}</button>
        </div>
    )
}
export default Events