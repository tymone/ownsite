import React, { Component } from 'react';
import Template from './Template';

import printscr from "../images/printscreen.png";

export default class Projects extends Component {
  state = {
    class: 'project',
    title: 'Moje projekty',
  }

  render() {
    const body =
      <React.Fragment>
        <p>
          Aktualnie zajmuję się projektem organizacji czasu pracy dla pracowników w celu rozwijania umiejętności, gdzie wykorzystuję technologie takie jak: <strong>HTML5,
          CSS3(Sass), Java Script, React, Axios, NodeJS, ExpressJS, MongoDB.</strong>
        </p>
        <a href="https://tymone.github.io/rescuer_portal/">
          <img src={printscr} alt="printscreen" />
        </a>
      </React.Fragment>
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    )
  }
}