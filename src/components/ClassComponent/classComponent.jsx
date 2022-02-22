import React from "react";
import Props from "./props";
class Name extends React.Component{
    render(){
        return <h2>From Name Component</h2>
    }
}
class ClassComponent extends React.Component{
    constructor(){
        super();
        console.log("Hii From Class Component...")
        this.state={
            name:true
        }
    }
    render(){
        return(
            <div>
                <h1>Hii From Class Component </h1>
                <Name />
                <Props name={this.state.name}/>
             </div>
        );
    }
};
export default ClassComponent;