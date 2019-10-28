import React, { useEffect } from "react";
import "../styles/style.css";

import logoImg from "../images/portret.png";

const Header = () => {
  useEffect(() => scrollDown());

  let scrollDown = () => {
    window.addEventListener("scroll", () => {
      let arrows = document.querySelector(".borderArrows");
      if (window.scrollY) {
        arrows.classList.add("hide");
      } else {
        arrows.classList.remove("hide");
      }
    });
  };

  return (
    <>
      <header>
        <img className="logoImg" src={logoImg} alt="portret" />
        <h1>Tymoteusz Hryniewiecki</h1>
        <h2>Web developer</h2>
        <div className="borderArrows">
          <i className="fas fa-angle-double-down"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
