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
        let title = document.querySelectorAll(".project .handleActive");

        title.forEach(item => item.classList.add("active"));
      }
    });
  };

  handleHover = () => {
    if(window.innerWidth > 701){
    const link = document.querySelector(".project img");
    const handleHover = document.querySelector(".handleHover");

    link.addEventListener("mouseenter", () => {
      handleHover.classList.add("active");
    });

    handleHover.addEventListener("mouseleave", () => {
      handleHover.classList.remove("active");
    });
  }
  };

  render() {
    const body = (
      <>
        <h2 className="handleActive">Projekty</h2>
        <div className="imgContainer">
          <img src={printscr} alt="printscreen" className="handleActive" />
          <div className="handleHover">
            <a href="https://tymone.github.io/rescuer_portal/">
              <i className="fas fa-eye"></i>
            </a>
            <a href="https://github.com/tymone/rescuer_portal">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p className="handleActive">
          W celu rozwijania umiejętności aktualnie pracuję nad projektem
          organizacji czasu pracy pracowników, gdzie poza harmonogramem
          zsynchronizowanym z kalendarzem(urlopy, delegacje, zwolnienia
          lekarskie i inne dni wolne od pracy) znajduje się również szczegółowa
          baza danych pracowników z możliwością ich dodawania, edycji oraz
          usuwania, ToDoApp, tworzenie odrębnych harmonogramów z
          wyszczególnieniem dat oraz przypisaniem do nich pracowników.
          Technologie wykorzystane w tym projekcie:
          <strong>
            HTML5, CSS3(Sass), JavaScript, React, Redux, ExpressJS, MongoDB.
          </strong>
        </p>
      </>
    );
    return <Template class={this.state.class} body={body} />;
  }
}
