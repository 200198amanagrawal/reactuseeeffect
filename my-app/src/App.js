import React,{Component} from "react";
import Student from "./student";
/*
class App extends Component
{
    render()
    {
        return (
            <>
                <Student roll="123"/>
            </>
        );
        //could also have returned return <h1>hello world!!</h1>.
    }
}
export default App
/*const App=(props)=>{
return <h1>Hello world {props.name}</h1>;
};
;*/

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
        this.state={
            roll:101
        };
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("get derivied");
        console.log(state);
        return null;
    }
    render()
    {
        console.log("App remdered");
        return (
            <>
        <Student name="Aman"></Student>
        
        </>)    }
}
