import { useRef } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
const Login=()=>{

    const id = useRef(null);
    const pass = useRef(null);
    const navigate=useNavigate()
    const checkLogIn=()=>{

        if(id.current.value === "1234" && pass.current.value === "1234"){
            navigate("/Home");
        }
        // console.log(id.current.value)
        // if(id.current.value !== "1234"){
            
        //     // sms.current.innerText="Please enter valid Id"
        //     // console.log(sms.current.innerText)
        //     setSms("Please enter valid Id")
        // }
        // else if(pass.current.value !== "1234"){
        //     // sms.current.innerHTML="Please enter valid Passeord"
        //     setSms("Please enter valid Passeord")
        // }

    }
    return(
        <div style={{marginTop:"4rem"}}>
            <input type="text" ref={id}/>
            <input type="text" ref={pass}/>
            <button onClick={checkLogIn}>LogIn</button>
            
        </div>
    )
}
export default Login;