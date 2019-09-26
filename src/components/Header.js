import React from "react";
import "../styles/style.css";

import logoImg from '../images/portret.png';

const Header = () => {

  let scrollOnContact = () => {
    document.querySelector('.contact').scrollIntoView({behavior: "smooth", block: "start"})
  }
  return (
    <header>
      
      <div className="logo">
        <img  className="logoImg" src={logoImg} alt="portret" />
      </div>
      <div className="title">
          <h1>Tymoteusz Hryniewiecki</h1>
          <h2>Web Developer</h2>
          <button className="sendMessage" onClick={scrollOnContact}>Wyślij wiadomość</button>
      </div>
      {/* <i className="fas fa-angle-double-down"></i> */}
    </header>
  );
};

export default Header;
