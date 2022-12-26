import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Navbar from './Components/Navbar/Navbar';

function App(){
  return(
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/about" element={<About/>}></Route>
</Routes>
</BrowserRouter>
)}
  
export default App;
