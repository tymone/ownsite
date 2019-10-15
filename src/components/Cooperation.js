import React, { Component } from "react";

import Template from "./Template.js";

import html5logo from '../images/html5-logo.png';
import css3logo from '../images/css3-logo.png';
import sasslogo from '../images/sass-logo.png';
import jslogo from '../images/js-logo.png';
import reduxlogo from '../images/redux-logo.png';
import reactlogo from '../images/react-logo.png';
import expresslogo from '../images/express-logo.png';
import nodelogo from '../images/node-logo.png';
import mongologo from '../images/mongo-logo.png';
import gitlogo from '../images/git-logo.png';

export default class Cooperation extends Component {
  state = {
    class: "cooperation",
    title: "Stack technologiczny"
  };

  scroll = () => {
    window.addEventListener('scroll', () => {
      
      if(window.scrollY > 1150){
        // let img = document.querySelector('.cooperation img')
        let text = document.querySelector('.cooperation p')

        // img.classList.add('active')
        text.classList.add('active')
      }
    })
  }

  render() {
    this.scroll()
    const body = (
      <>
        <p>
          Stack technologiczny w którym się rozwijam
        </p>
        <div className="arrows">
          <div className="line1"></div>
          <div className="line2"></div>
          <i className="fas fa-arrow-down arr1"></i>
          <i className="fas fa-arrow-down arr2"></i>
          <i className="fas fa-arrow-down arr3"></i>
          <i className="fas fa-arrow-down arr4"></i>

        </div>
        <div className="stackContainer">
          <div className="front-endContainer">
            <p>Front-end</p>
            <div className="logoContainer">
              <img src={html5logo} alt='logo html5'/>
              <img src={css3logo} alt='logo css3'/>
              <img src={sasslogo} alt='logo sass'/>
              <img src={jslogo} alt='logo js'/>
              <img src={reactlogo} alt='logo react'/>
              <img src={reduxlogo} alt='logo redux'/>
            </div>
          </div>

          <div className="back-endContainer">
            <p>Back-end</p>
            <div className="logoContainer">
              <img src={expresslogo} alt='logo express'/>
              <img src={nodelogo} alt='logo node'/>
            </div>
          </div>

          <div className="dbContainer">
            <p>Bazy danych</p>
            <div className="logoContainer">
              <img src={mongologo} alt='logo mongo'/>
            </div>
          </div>

          <div className="versionControl">
            <p>Kontrola wersji</p>
            <div className="logoContainer">
              <img src={gitlogo} alt='logo git'/>
            </div>
          </div>
        </div>
      </>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
