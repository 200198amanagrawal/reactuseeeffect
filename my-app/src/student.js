import React,{Component} from "react";
import propTypes from "prop-types";
import "./App.css";
import { render } from "react-dom";
/*class Student extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"XYZ",
            roll:this.props.roll
        };
    }
    handleclick=()=>
    {
        this.setState({name:"xyz",roll:"105"});
    };
    render()
    {return (<div>
        <h1 className="bg">Hello world {this.state.name} {this.state.roll}
        </h1>
        <button onClick={this.handleclick}>Click me</button>
    </div>)
    };
};/*
Student.propTypes={
    name:propTypes.string.isRequired,
};
Student.defaultProps=
{
    name:"hello world!!",
};
export default Student;
*/
export default class Student extends Component
{
    render()
    {
        console.log("Student remdered");
        return(
            
            <>
    <h1>Hello {this.props.name}</h1>
    <h1>Name: {this.props.name}</h1>
            </>
        )
    }
}