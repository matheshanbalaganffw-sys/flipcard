import React, { useState } from "react";

const Ak = () =>
   {
    const [input1, setinputvalue] = useState("");
    const[showtext,setSumittedvalue]=useState("")
    const handleChange = () => {
    setSumittedvalue(input1)
    };

   

    return (
      <div>
   
         
        <input type="text" 
        value={input1}
        onchange={(e)=>setinputvalue(e.target.value)}
        />
        <button type="button" onClick={handleChange}>Submit</button>
        <h1>result={input1}</h1>
      </div>
    );
  };

export default Ak;

 