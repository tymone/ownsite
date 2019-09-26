import React, { Component } from "react";

import Template from "./Template.js";

import shakeHands from '../images/shakeHands.jpg';

export default class Cooperation extends Component {
  state = {
    class: "cooperation",
    title: "Współpraca"
  };

  render() {
    const body = (
      <>
      <div className="photo">
        <img src={shakeHands} alt="shake hands"/>
      </div>
        <p>
          Jeśli jesteś osobą zainteresowaną współpracą czy to ze względu
          potrzeby posiadania własnej strony internetowej lub innowacyjnego
          rozwiązania technologicznego usprawniającego twoją organizację pracy
          czy też osobą/firmą szykającą pracownika ze znajomością: <strong>HTML5, CSS3,
          Sass, JavaScript, React, Express.js, Node.js, Axios, MongoDB, Git</strong> - zapraszam
          do sekcji kontakt.
        </p>
      </>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
