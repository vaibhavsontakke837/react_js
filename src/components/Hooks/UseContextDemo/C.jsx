import { Context } from "./UseContextDemo";
import { useContext } from "react";
const C=()=>{

    const value=useContext(Context)
    return(

        <h3>From C Component : {value}</h3>

        // <Context.Consumer>
        //   {
        //       (value)=>{
        //           return(
        //               <h3>From C Component : {value}</h3>
        //           )
        //       }
        //   }
        // </Context.Consumer>
    )
}
export default C;