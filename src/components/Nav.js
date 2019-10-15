//poprawić IF'y w hideNav!

import React from "react";
import "../styles/style.css";

const Nav = () => {

  let handleScroll = (title) => {
    document.querySelector(`.${title}`).scrollIntoView({behavior: "smooth", block: "start"})
    document.querySelector('.barNav').classList.toggle('active')
    document.querySelector('.fa-bars').classList.toggle('hide')
  }

  let handleToggleMenu = () => {
    document.querySelector('.barNav').classList.toggle('active')
    document.querySelector('.fa-bars').classList.toggle('hide')
  }
    
  return (
    <>
      <nav>
        <i className="fas fa-bars" onClick={handleToggleMenu}></i>
        <ul className="showNav">
          <li onClick={() => handleScroll('about')}>O mnie</li>
          <li onClick={() => handleScroll('project')}>Projekty</li>
          <li onClick={() => handleScroll('cooperation')}>Współpraca</li>
          <li onClick={() => handleScroll('contact')}>Kontakt</li>
        </ul>

        <ul className="barNav">
          <li onClick={() => handleScroll('about')}>O mnie</li>
          <li onClick={() => handleScroll('project')}>Projekty</li>
          <li onClick={() => handleScroll('cooperation')}>Współpraca</li>
          <li onClick={() => handleScroll('contact')}>Kontakt</li>
        </ul>
      </nav>
    </>
  );
}

  export default Nav