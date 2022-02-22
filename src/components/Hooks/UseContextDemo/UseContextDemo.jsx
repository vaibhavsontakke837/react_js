import A from "./A";
import { useState , createContext } from "react";


const Context=createContext();
console.log(Context)
const UseContextDemo=()=>{


    const [fname,setFname]=useState("Vaibhav");
    return(
        <Context.Provider value={fname}>
            <h1>USeContext : {fname}</h1>
            <A />
        </Context.Provider>
    )
}
export default UseContextDemo;
export {Context}