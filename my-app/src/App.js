import React,{Component, useState, useEffect} from "react";
//import Student from "./student";
function App()
{
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(50);
    const handleclick=()=>{
        setCount(count+1);
    };
    const handleclick1=()=>{
        setCount1(count1-1);
    };
    useEffect(
        ()=>{
            console.log("Use effect called");
        },[count]//giving another param in order to make useeffect run fir just count1
    );
    return(
        <>
        <h1>Count:{count}</h1>
        <button type="button" onClick={handleclick}>
            Increment
        </button>
        
        <h1>Count:{count1}</h1>
        <button type="button" onClick={handleclick1}>
            Decrement
        </button>
        </>
    )
}
export default App;