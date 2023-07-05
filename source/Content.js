import React from "react";
const Content =()=>{
    const handNameChange= ()=> {
        const names=["Earn","grow","gift"];
        const int=Math.floor(Math.random()*3);
       return names[int]
    }
    return(
        <div>
            <main> <h1>let {handNameChange()} mass</h1></main>
        
        </div>
    )
}
export default Content