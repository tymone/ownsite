//poprawić IF'y w hideNav!

import React from "react";
import "../styles/style.css";

const Nav = () => {

  let handleScroll = (title) => {
    document.querySelector(`.${title}`).scrollIntoView({behavior: "smooth", block: "start"})
  }
   
  return (
    <nav>
      <ul>
        <li onClick={() => handleScroll('about')}>O mnie</li>
        <li onClick={() => handleScroll('project')}>Projekty</li>
        <li onClick={() => handleScroll('cooperation')}>Współpraca</li>
        <li onClick={() => handleScroll('contact')}>Kontakt</li>
      </ul>
    </nav>
  );
}

  export default Nav


 // navbarFunc = () => {
  //   $(".fa-times, nav, ul, li").toggleClass("active");
  // };

  // backgroundScroll = () => {
  //   $(document).on("scroll", function() {
  //     const scroll = $(document).scrollTop();
  //     const headerHigh = $("header").height();
  //     const $nav = $("nav");
  //     if (scroll > headerHigh - 300) {
  //       $nav.addClass("blackBgc");
  //     }
  //     if (scroll < headerHigh - 300) {
  //       $nav.removeClass("blackBgc");
  //     }
  //   });
  // };
