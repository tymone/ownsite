import React, { Component } from "react";

import Template from "./Template.js";

export default class Contact extends Component {
  state = {
    class: "contact",
    title: "Kontakt"
  };

  render() {
    const body = (
      <React.Fragment>
        <div className="leftSide">
          <p>
            <a href="tel:509-767-794">
              <i className="fas fa-mobile-alt" /> 509-767-794
            </a>
          </p>
          <p>
            <a href="mailto:tymoteusz.hryniewiecki@gmail.com">
              <i className="far fa-envelope" />
              wyślij e-mail
            </a>
          </p>
          <p>
            <a href="https://m.me/tymoteusz.hryniewiecki">
              <i className="fab fa-facebook-square" /> facebook
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/tymoteusz-hryniewiecki/">
              <i className="fab fa-linkedin" /> linkedin
            </a>
          </p>
        </div>
        <div className="rightSide">
          <form action="">
            <input type="text" name="email" placeholder="podaj adres e-mail" />
            <textarea placeholder="Wiadomość" />
            <button>Wyślij</button>
          </form>
        </div>
      </React.Fragment>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
