import React, { Component } from 'react';

import Template from './Template';

import html_logo from "../images/html_logo.png";
import css_logo from "../images/css_logo.png";
import js_logo from "../images/js_logo.png";
import react_logo from "../images/react_logo.png";
import google_logo from "../images/google_logo.png";

export default class Start extends Component {
  state = {
    class: 'start',
    title: 'Witam na mojej stronie',
  }
  render() {
    const body =
      <React.Fragment>
        <div className="wrapLeft">
          <p>
            Strona na której obecnie się znajdujesz jest w pełni responsywna
            na wszystkich urządzeniach, od małych ekranów smartfonów, po
            wysokiej rozdzielczości ekrany monitorów komputerowych. Stworzona
            z wykorzystaniem technologii takich jak:
          </p>
          <img src={html_logo} alt="html" />
          <img src={css_logo} alt="css" />
          <img src={js_logo} alt="js" />
          <img src={react_logo} alt="react" />
        </div>
        <div className="wrapRight">
          <p>
            Nowoczesna i zgodna z aktualnymi standardami. Jest zoptymalizowana
            pod kątem wyszukiwarek internetowych.
          </p>
          <img src={google_logo} alt="html" />
        </div>
      </React.Fragment >

    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    )
  }
}