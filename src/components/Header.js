import React, { useEffect } from "react";
import "../styles/style.css";

import logoImg from "../images/portret.png";

const Header = () => {
  useEffect(() => scrollSection());
  useEffect(() => scrollDown());

  let scrollSection = () => {
    window.addEventListener("scroll", () => {
      let section = document.querySelector("header");
      let windowPosition = window.scrollY;
      section.style.top = windowPosition + "px";
    });
  };
  let scrollDown = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        document.querySelector(".fa-angle-double-down").classList.add("hide");
      } else {
        document
          .querySelector(".fa-angle-double-down")
          .classList.remove("hide");
      }
    });
  };

  return (
    <>
      <header>
        <img className="logoImg" src={logoImg} alt="portret" />
        <h1>Tymoteusz Hryniewiecki</h1>
        <h2>Web developer</h2>
        <i className="fas fa-angle-double-down"></i>
      </header>
    </>
  );
};

export default Header;
