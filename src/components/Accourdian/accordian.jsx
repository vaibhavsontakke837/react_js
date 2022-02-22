import { useState } from "react";
import { questions } from "./data";
import MyAccourdian from "./myAccourdian";
import "./accordian.css"
const Accourdian = ()=>{

    const[data,setData]=useState(questions)
    console.log(data)
    return(
        <div className="accordian">
            <h1>React Questions</h1>
            {
                data.map((ele)=>{
                    return <MyAccourdian data={ele} key={ele.id}/>
                })
            }
        </div>
    )
}
export default Accourdian;