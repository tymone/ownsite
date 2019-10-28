import React, { Component } from "react";

import Template from "./Template.js";

import html5logo from "../images/html5-logo.png";
import css3logo from "../images/css3-logo.png";
import sasslogo from "../images/sass-logo.png";
import jslogo from "../images/js-logo.png";
import reduxlogo from "../images/redux-logo.png";
import reactlogo from "../images/react-logo.png";
import expresslogo from "../images/express-logo.png";
import nodelogo from "../images/node-logo.png";
import mongologo from "../images/mongo-logo.png";
import gitlogo from "../images/git-logo.png";

export default class Cooperation extends Component {
  state = {
    class: "cooperation"
  };

  componentDidMount() {
    this.scroll();
  }

  scroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2000) {
        let handleActive = document.querySelectorAll(
          ".cooperation .handleActive"
        );

        handleActive.forEach(item => item.classList.add("active"));
      }
    });
  };

  render() {
    const body = (
      <>
        <h2>Współpraca</h2>
        <p className="handleActive">
          Stack technologiczny w którym się rozwijam
        </p>
        <div className="arrows">
          <div className="line line1 handleActive"></div>
          <div className="line line2 handleActive"></div>
          <i className="fas fa-arrow-down arr1 handleActive"></i>
          <i className="fas fa-arrow-down arr2 handleActive"></i>
          <i className="fas fa-arrow-down arr3 handleActive"></i>
          <i className="fas fa-arrow-down arr4 handleActive"></i>
        </div>
        <div className="stackContainer">
          <div className="front-endContainer handleActive">
            <div className="front-endPContainer">
              <p className="handleActive">Front-end</p>
            </div>
            <div className="logoContainer">
              <img className="handleActive" src={html5logo} alt="logo html5" />
              <img className="handleActive" src={css3logo} alt="logo css3" />
              <img className="handleActive" src={sasslogo} alt="logo sass" />
              <img className="handleActive" src={jslogo} alt="logo js" />
              <img className="handleActive" src={reactlogo} alt="logo react" />
              <img className="handleActive" src={reduxlogo} alt="logo redux" />
            </div>
          </div>

          <div className="back-endContainer handleActive">
            <div className="back-endPContainer">
              <p className="handleActive">Back-end</p>
            </div>
            <div className="logoContainer">
              <img
                className="handleActive"
                src={expresslogo}
                alt="logo express"
              />
              <img className="handleActive" src={nodelogo} alt="logo node" />
            </div>
          </div>

          <div className="dbContainer handleActive">
            <div className="dbPContainer">
              <p className="handleActive">Bazy danych</p>
            </div>
            <div className="logoContainer">
              <img className="handleActive" src={mongologo} alt="logo mongo" />
            </div>
          </div>

          <div className="versionControl handleActive">
            <div className="versionPContainer">
              <p className="handleActive">Kontrola wersji</p>
            </div>
            <div className="logoContainer">
              <img className="handleActive" src={gitlogo} alt="logo git" />
            </div>
          </div>
        </div>
        <p className="under handleActive">
          Osoby zainteresowane współpracą zapraszam do sekcji kontakt.
        </p>
      </>
    );
    return <Template class={this.state.class} body={body} />;
  }
}
