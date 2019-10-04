import React, { Component } from "react";

import Template from "./Template.js";

import shakeHands from '../images/shakeHands.jpg';

export default class Cooperation extends Component {
  state = {
    class: "cooperation",
    title: "Współpraca"
  };

  scroll = () => {
    let title = document.querySelector('.cooperation h2')
    title.style.opacity = (window.scrollY - 900) * .003 
    
    if(window.scrollY > 1550){
      let img = document.querySelector('.cooperation img')
      let text = document.querySelector('.cooperation p')

      img.classList.add('active')
      text.classList.add('active')
    }
  }

  render() {
    window.addEventListener('scroll', this.scroll)
    const body = (
      <>
      <div className="photo">
        <img src={shakeHands} alt="shake hands"/>
      </div>
      <p>
        Jeśli jesteś osobą zainteresowaną współpracą czy to ze względu
        potrzeby posiadania własnej strony internetowej lub innowacyjnego
        rozwiązania technologicznego usprawniającego twoją organizację pracy
        czy też osobą/firmą szukającą pracownika ze znajomością: <strong>HTML5, CSS3,
        Sass, JavaScript, React, Redux, Express.js, Node.js, Axios, MongoDB, Git</strong> - zapraszam
        do sekcji kontakt.
      </p>
      </>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
