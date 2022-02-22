import AA from "./AA"
import { useState } from "react";
const ReactMemo = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>From ReactMemo Component Count : {count}</h1>
            <button onClick={()=> setCount(count + 1)}>Click Me</button>

            <AA />

        </div>
    )
}
export default ReactMemo;