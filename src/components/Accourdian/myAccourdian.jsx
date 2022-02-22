import { useState } from "react";
import "./myAccourdian.css"

const MyAccourdian = ( {data} )=>{
    // console.log(data)
    const[show,setShow]=useState(false)
    return(
        <div className="main_container">
            <div className="question">
                <p onClick={()=> setShow(!show)}>{show ?  "-" : "+"}</p>
                <h2>{data.question}</h2>
            </div>
            {
                show && <p className="answer">{data.answer}</p>
            }
           
        </div>
    )
}
export default MyAccourdian;