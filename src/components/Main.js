import React from "react";
import "../styles/Main.css";
import $ from "jquery";

import Start from './Start.js';
import Projects from './Projects.js';
import About from './About.js';
import Cooperation from './Cooperation.js';
import Contact from './Contact.js';

export default class Main extends React.Component {
  scroll = () => {
    $(document).on("scroll", function () {
      const scrollValue = $(this).scrollTop();
      const img = $(".start .wrapLeft img");
      const imgFromTop = img.offset().top;
      const img2 = $(".start .wrapRight img");
      const img2FromTop = img2.offset().top;

      if (scrollValue > imgFromTop / 2) {
        $(".start .wrapLeft img").addClass("scroll");
      }
      if (scrollValue > img2FromTop - 500) {
        $(".start .wrapRight img").addClass("scroll");
      }

      if (scrollValue < 100) {
        $(".start .wrapLeft img, .start .wrapRight img").removeClass("scroll");
      }
    });
  };
  render() {
    this.scroll();
    return (
      <main>
        <Start />
        <Projects />
        <About />
        <Cooperation />
        <Contact />
      </main>
    );
  }
}
