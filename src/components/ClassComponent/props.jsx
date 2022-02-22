import React from "react";
class Props extends React.Component{
    constructor(){
        super();
        this.state={
            data:"data"
        }
    }
    render(){
        return(
            <div>
                <h3>Hello From Props {this.props.name}</h3>
                <h1>Data- {this.state.data}</h1>
            </div>
        )
    }
}
export default Props;