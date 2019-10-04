import React from "react";
import "../styles/style.css";

import Projects from "./Projects.js";
import About from "./About.js";
import Cooperation from "./Cooperation.js";
import Contact from "./Contact.js";

const Main = () =>{

  let scrollSection = () => {
    let section = document.querySelector('header')
    let windowPosition = window.scrollY
    section.style.top =  windowPosition * .4 + 'px'
  }

  return (
    <main>
      <About/>
      <Projects />
      <Cooperation />
      <Contact />
      {window.addEventListener('scroll', scrollSection) }
  </main>
  );
  
}

export default Main
