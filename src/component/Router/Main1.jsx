import { BrowserRouter, Routes, Route } from "react-router-dom";

import Insert from "./Insert";
import Selectlanguage from "./Selectlanguage";
import Enterpin from "./Enterpin";



function Main() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Insert />} />

        <Route path="/selectlanguage" element={<Selectlanguage />} />
        <Route path="/Enterpin" element={<Enterpin/>}/>
    <Route path="/Selectoption"element={<Selectop/>}/>
   
     
      </Routes>

    </BrowserRouter>
  );
}

export default Main;