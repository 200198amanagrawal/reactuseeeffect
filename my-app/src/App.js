import React,{Component, useState} from "react";
//import Student from "./student";
function App()
{
    const nameStateVariable=useState("Aman");
    const handleclick=()=>{
        nameStateVariable[1]("Geeky Shows");
    };
    return(
        <>
        <h1>{nameStateVariable[0]}</h1>
        <button type="button" onClick={handleclick}>
            Change
        </button>
        </>
    )
}
export default App;