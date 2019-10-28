import React, { Component } from "react";
import Template from "./Template";

import aboutImg from "../images/cooperation.jpg";

export default class About extends Component {
  state = {
    class: "about"
  };

  componentDidMount() {
    this.scrollSection();
  }

  scrollSection = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        let handleActive = document.querySelectorAll(".about .handleActive");

        handleActive.forEach(item => item.classList.add("active"));
      }
    });
  };

  render() {
    const body = (
      <>
        <h2 className="handleActive">O mnie</h2>

        <p className="handleActive">
          Programowaniem zajmuję się od 2017 roku, co po niedługim okresie stało
          się pasją. Ciekawość i chęci ciągle pozwalają na rozwój w tej
          dziedzinie. Poza programowaniem prowadzę również aktywny tryb życia,
          czy to jazda na rowerze, pływanie lub jeśli sezon sprzyja to wędrówki
          górskie.
        </p>
        <img
          src={aboutImg}
          alt="programming on computer"
          className="handleActive"
        />
      </>
    );
    return <Template class={this.state.class} body={body} />;
  }
}
