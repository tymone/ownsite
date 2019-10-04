import React, { Component } from 'react';
import Template from './Template';

import printscr from "../images/printscreen.png";

export default class Projects extends Component {
  state = {
    class: 'project',
    title: 'Moje projekty',
  }

  scroll = () => {
    let title = document.querySelector('.project h2')
    title.style.opacity = (window.scrollY - 550) * .003

    if(window.scrollY > 1100){
      let img = document.querySelector('.project img')
      let text = document.querySelector('.project p')

      img.classList.add('active')
      text.classList.add('active')
    }
  }

  render() {
    window.addEventListener('scroll', this.scroll)
    const body =
      <>
        <p>
          Aktualnie zajmuję się projektem organizacji czasu pracy dla pracowników w celu rozwijania umiejętności, gdzie wykorzystuję technologie takie jak: <strong>HTML5,
          CSS3(Sass), Java Script, React, Redux, Axios, NodeJS, ExpressJS, MongoDB.</strong>
        </p>
        <a href="https://tymone.github.io/rescuer_portal/">
          <img src={printscr} alt="printscreen" />
        </a>
      </>
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    )
  }
}