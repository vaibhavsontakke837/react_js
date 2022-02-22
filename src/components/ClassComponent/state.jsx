import React from "react";
import Demo from "./demo";
class StateDemo extends React.Component{
    componentDidMount(){
        console.log("hi from componentDidMount");
    }
    constructor(){
        super();
        console.log("hi from constructor Method");
        this.state={
            change:"Vaibhav",
            status:false
        }
    }
    // changeMe=()=>{
    //     console.log("hiii")
    // }
    render(){
        return(
            <div>
                <h1>{this.state.change}</h1>
                <h1>From state component {this.state.status ? (<h3>Hello</h3>) : (<h3>Hello Dear</h3>)}</h1>
                <button onClick={()=>{ this.setState({change:"Vikas"})}}>Click Me</button>
                {
                    this.state.status ? (<Demo data="Welcome"/>):
                                        (<Demo data="Welcome to Class Comp"/>)
                }
            </div>
        )
    }
}
export default StateDemo;