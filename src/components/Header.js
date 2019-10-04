import React from "react";
import "../styles/style.css";

import logoImg from '../images/portret.png';

const Header = () => {

  let scrollOnContact = () => {
    document.querySelector('.contact').scrollIntoView({behavior: "smooth", block: "start"})
  }

  let scrollDown = () => {
    window.addEventListener('scroll', () => {
      if(window.scrollY){
        document.querySelector('.fa-angle-double-down').classList.add('active')
      }
      else{
        document.querySelector('.fa-angle-double-down').classList.remove('active')
      }
    } 
    )
  }

  return (
    <>
    {scrollDown()}
    <header>
      <div className="logo">
        <img  className="logoImg" src={logoImg} alt="portret" />
      </div>
      <div className="title">
        <h1>Tymoteusz Hryniewiecki</h1>
        <h2>Web Developer</h2>
        <button className="sendMessageButton" onClick={scrollOnContact}>Wyślij wiadomość</button>
      </div>
      <div className="navIco">
      
        <i className="fas fa-angle-double-down"></i>
      </div>
    </header>
    </>
  );
};

export default Header;
