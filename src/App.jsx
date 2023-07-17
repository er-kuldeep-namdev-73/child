import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Enroll from "./components/Form/Enroll/Enroll";

function App() {
  
  return (
    <div className="container-fluid">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/enroll" element={<Enroll/>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
