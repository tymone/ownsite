import React, { Component } from "react";

import Template from "./Template.js";

export default class Cooperation extends Component {
  state = {
    class: "cooperation",
    title: "Współpraca"
  };

  render() {
    const body = (
      <>
        <p>
          Jeśli jesteś osobą zainteresowaną współpracą czy to ze względu
          potrzeby posiadania własnej strony internetowej lub innowacyjnego
          rozwiązania technologicznego usprawniającego twoją organizację pracy
          czy też osobą/firmą szykającą pracownika ze znajomością: HTML5, CSS3,
          Sass, JavaScript, React, Express.js, Node.js, MongoDB, Git - zapraszam
          do sekcji kontakt.
        </p>
      </>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
