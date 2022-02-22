import React from "react";
import { useState } from "react";
import './Circle.css'

const Circle=()=>{
    const[Round,setRound]=useState(3)
    const round=(e)=>{
        // console.log(e.target.value)
        setRound(Number(e.target.value))
    }
    if(Round > 6){
            alert("Please Enter Number between 1 to 6");
            setRound(" ")
    }
    return(
        <div>
            <div className="circle">
                <h1>Assign #18</h1>
                <div>
                    <input type="text" onChange={round} value={Round}/>
                </div>
                <div className="circle_bottom">
                    <div className={`circle_bottom_child ${Round === 1 && "round"}`}>1</div>
                    <div className={`circle_bottom_child ${Round === 2 && "round"}`}>2</div>
                    <div className={`circle_bottom_child ${Round === 3 && "round"}`}>3</div>
                    <div className={`circle_bottom_child ${Round === 4 && "round"}`}>4</div>
                    <div className={`circle_bottom_child ${Round === 5 && "round"}`}>5</div>
                    <div className={`circle_bottom_child ${Round === 6 && "round"}`}>6</div>
                </div>
            </div>
        </div>
    )
}
export default Circle;