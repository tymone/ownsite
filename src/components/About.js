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
      if (window.scrollY > 500) {
        let img = document.querySelector(".about img");
        let text = document.querySelector(".about p");

        img.classList.add("show");
        text.classList.add("show");
      }
    });
  };

  render() {
    const body = (
      <>
        <h2>O mnie</h2>
        <img src={aboutImg} alt="programming on computer" />
        <p>
          Programowaniem zajmuję się od 2017 roku, co po niedługim okresie stało
          się pasją. Ciekawość i chęci ciągle pozwalają na rozwój w
          programowaniu webowym. Wolne chwile między programowaniem a pracą na
          etacie spędzam aktywnie przez jazdę na rowerze, pływanie czy też
          wędrówki górskie.
        </p>
      </>
    );
    return <Template class={this.state.class} body={body} />;
  }
}
