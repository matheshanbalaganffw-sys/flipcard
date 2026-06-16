import React, { useEffect, useState } from 'react'

const Time = () => {
const[count,setcound]=useState(0);
useEffect(()=>{
setTimeout(()=>{
setcound((count)=>count+1);
},1000);
},);
    
  return (
  <h1>I've a Rendered {count} Time</h1>
  )
}

export default Time