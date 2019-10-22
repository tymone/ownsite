import React, { Component } from "react";
import Template from "./Template";

import printscr from "../images/printscreen.png";

export default class Projects extends Component {
  state = {
    class: "project"
  };

  componentDidMount() {
    this.scroll();
    this.handleHover();
  }

  scroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1150) {
        let img = document.querySelector(".project img");
        let text = document.querySelector(".project p");

        img.classList.add("active");
        text.classList.add("active");
      }
    });
  };

  handleHover = () => {
    const link = document.querySelector(".project img");
    const handleHover = document.querySelector(".handleHover");

    link.addEventListener("mouseenter", () => {
      handleHover.classList.add("active");
    });

    handleHover.addEventListener("mouseleave", () => {
      handleHover.classList.remove("active");
    });
  };

  render() {
    const body = (
      <>
        <h2>Projekty</h2>
        <div className="imgContainer">
          <img src={printscr} alt="printscreen" />
          <div className="handleHover">
            <a href="https://tymone.github.io/rescuer_portal/">
              <i className="fas fa-eye"></i>
            </a>
            <a href="https://github.com/tymone/rescuer_portal">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p>
          Aktualnie zajmuję się projektem organizacji czasu pracy dla
          pracowników w celu rozwijania umiejętności, gdzie wykorzystuję
          technologie takie jak:{" "}
          <strong>
            HTML5, CSS3(Sass), Java Script, React, Redux, ExpressJS, MongoDB.
          </strong>
        </p>
      </>
    );
    return <Template class={this.state.class} body={body} />;
  }
}
