import { useState } from "react";
import B from './B'
import C from "./C";

const A=()=>{
    const [Text,setText]=useState(" ")

    const receiveText=(e)=>{
        setText(e)
    }
    return(
       
        <div>
            <B receiveText={receiveText}/>
            <C text={Text}/>
            {/* {Text} */}
        </div>
        
    )
}
export default A;