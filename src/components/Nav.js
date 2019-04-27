//poprawić IF'y w hideNav!

import React from "react";
import "../styles/Nav.css";
import $ from "jquery";

export default class Nav extends React.Component {
  navbarFunc = () => {
    $(".fa-times, nav, ul, li").toggleClass("active");
  };

  backgroundScroll = () => {
    $(document).on("scroll", function() {
      const scroll = $(document).scrollTop();
      const headerHigh = $("header").height();
      const $nav = $("nav");
      if (scroll > headerHigh - 300) {
        $nav.addClass("blackBgc");
      }
      if (scroll < headerHigh - 300) {
        $nav.removeClass("blackBgc");
      }
    });
  };

  scrollOnSection1 = () => {
    $("body, html").animate({ scrollTop: $(".wrap").offset().top });
    $(".fa-times, nav, ul, li").removeClass("active");
  };
  scrollOnSection2 = () => {
    $("body, html").animate({ scrollTop: $(".project").offset().top });
    $(".fa-times, nav, ul, li").removeClass("active");
  };
  scrollOnSection3 = () => {
    $("body, html").animate({ scrollTop: $(".about").offset().top });
    $(".fa-times, nav, ul, li").removeClass("active");
  };
  scrollOnSection4 = () => {
    $("body, html").animate({ scrollTop: $(".contact").offset().top });
    $(".fa-times, nav, ul, li").removeClass("active");
  };

  render() {
    this.backgroundScroll();
    return (
      <nav>
        <i className="fas fa-times" onClick={this.navbarFunc} />
        <ul>
          <li onClick={this.scrollOnSection1}>
            <i className="fas fa-home" />
            Start
          </li>
          <li onClick={this.scrollOnSection2}>
            <i className="fas fa-project-diagram" />
            Projekty
          </li>
          <li onClick={this.scrollOnSection3}>
            <i className="fas fa-user-tie" /> O mnie
          </li>
          <li onClick={this.scrollOnSection4}>
            <i className="fas fa-address-card" />
            Kontakt
          </li>
        </ul>
      </nav>
    );
  }
}
