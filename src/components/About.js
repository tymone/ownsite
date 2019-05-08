import React, { Component } from 'react';
import Template from './Template';

import bjj from "../images/bjj.jpg";
import swim from "../images/swimming.jpg";
import run from "../images/running.jpg";
import mountain from "../images/mountain.jpg";


export default class About extends Component {
  state = {
    class: 'about',
    title: 'O mnie'
  }

  render() {
    const body =
      <React.Fragment>
        <p>
          Na codzień poza pracą na etacie jestem pasjonatem programowania, rozwoju osobistego oraz aktywnego trybu życia.
        </p>
        <div className="pictures">
          <div className="item">
            <img src={bjj} alt="brazilian jiu-jitsu" />
            <p>Lubię się kulać...</p>
          </div>
          <div className="item">
            <img src={swim} alt="swimming" />
            <p>...lubię też pływać...</p>
          </div>
          <div className="item">
            <img src={run} alt="running" />
            <p>...biegać też lubię...</p>
          </div>
          <div className="item">
            <img src={mountain} alt="mountain walking" />
            <p>...wędrować po górach też, nawet bardzo lubię.</p>
          </div>
        </div>
      </React.Fragment>
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    )
  }
}