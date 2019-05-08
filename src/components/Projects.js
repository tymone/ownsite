import React, { Component } from 'react';
import Template from './Template';

import printscr from "../images/printscreen.png";

export default class Projects extends Component {
  state = {
    class: 'project clearfix',
    title: 'Moje projekty',
  }

  render() {
    const body =
      <React.Fragment>
        <p>
          Aktualnie zajmuję się projektem dla mojej obecnej pracy, póki co
          jest to projekt 'do szuflady' w celu rozwijania umiejętności
          programistycznych, gdzie wykorzystuję technologie takie jak: HTML5,
          CSS3(Sass), Java Script(ES6, React), Python(Flask), MongoDB.(
          <i>póki co link do repozytorium.</i>)
        </p>
        <a href="https://github.com/tymone/rescuer_portal">
          <img src={printscr} alt="printscreen" />
        </a>
      </React.Fragment>
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    )
  }
}