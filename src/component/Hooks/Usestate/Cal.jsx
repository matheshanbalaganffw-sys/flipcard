import React, { useState } from "react";

function Cal() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };
  const hand= () => {
    const sum = Number(num1) - Number(num2);
    setResult(sum);
  };
    const handle= () => {
    const sum = Number(num1) * Number(num2);
    setResult(sum);
  };
     const handlee= () => {
    const sum = Number(num1)/Number(num2);
    setResult(sum);
  };
  return (
    <div>
      <h2> Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
       
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={handleCalculate}>Add</button> <br />
       <button onClick={hand}>submition</button> <br />
       <button onClick={handle}>multiblication</button> <br />
       <button onClick={handlee}>divition</button>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Cal;