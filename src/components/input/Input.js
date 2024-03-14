import "./Input.css"
import React from "react";
class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ""}

    }

    update = (event) => {
        this.setState({inputValue: event.target.value})
    }

    enter = (event) => {
        if(event.keyCode === 13 && this.state.inputValue !== ""){
          this.props.inputEnter(this.state.inputValue)
        }


    }

    render(){
        return (
            <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} className="input" type="text" placeholder="boodschappen"></input>
        );

    }
   
}

export default Input