import React, { useState } from 'react'

const Usedata = () => {
  
   const [ name ,setname]=useState({
    id: '1',
    name: 'mathesh',
    age: '25'
   }
   )
  const [ sentence1 ,sent1]=useState("Dhoni")
  const [ sentence2 ,sent2]=useState("Virat")  
  const [ sentence3 ,sent3]=useState("Jadu")
  const [ sentence4 ,sent4]=useState("Raina")
  return (
    
      <div>
    <h1>{name.name}</h1>

<h1>{sentence1}</h1>
<button   type="button"
  onClick={()=>sent1("Mathesh")}>sent1</button>
<h1>{sentence2}</h1>
<button  type="button"
 onClick={()=>sent2( "Dhoni")}>sent2</button>
<h1>{sentence3}</h1>
<button  type="button"
 onClick={()=>sent3( "Virat")}>sent3</button>
<h1>{sentence4}</h1>
<button  type="button"
onClick={()=>sent4( "Raina")}>sent4</button>
    </div>
  )
}

export default Usedata