import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import About from "../app/pages/about";
import Home from "../app/pages/Home";
import Review from "../app/pages/Review";
import Featured from "../app/pages/Featured";
import Contact from "../app/pages/Contact";

function App() {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  useEffect(() => {
    
    window.addEventListener("mousemove", function(e){
      const posX = e.clientX;
      const posY = e.clientY;
  
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
  
      // cursorOutline.style.left = `${posX}px`;
      // cursorOutline.style.top = `${posY}px`;
  
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      },{duration: 1000, fill: "forwards"});
  
      console.log(posX,posY)
    })
  
    
  },[cursorDot, cursorOutline])
  

  return (
    <>
    <div className="cursor-dot" data-cursor-dot></div>
    <div className="cursor-outline" data-cursor-outline></div>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/review' element={<Review/>}></Route>
          <Route path='/featured' element={<Featured/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </>

  )
}

export default App
