import { useState } from "react";

const FormSubmit = ()=>{
    const[firstName,setFirstName] = useState()
    const[lastName,setLastName] = useState()

    const eventHeandler = (event)=>{
        event.preventDefault();
        setFirstName(firstName)
        console.log(firstName)
    }
    const getFirstName =(e)=>{
        // console.log(e.target.value)
        setFirstName(e.target.value)
    }
    const getLastName =(e)=>{
        // console.log(e.target.value)
        setLastName(e.target.value)
    }



    return(
        <form onSubmit={eventHeandler}>
            <h1>form Submit Demo : {firstName} {lastName}</h1><br />
           First Name : <input type="text" placeholder="Enter your name..." onChange={getFirstName}/><br />
           Last Name : <input type="text" placeholder="Enter your name..." onChange={getLastName}/><br />
            <button type="submit">Submit Me</button>
        </form>
    )
}
export default FormSubmit;