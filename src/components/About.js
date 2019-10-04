import React, { Component } from 'react';
import Template from './Template';

import aboutImg from '../images/cooperation.jpg';

export default class About extends Component {
  state = {
    class: 'about',
    title: 'O mnie'
  }

  scroll = () => {
    let title = document.querySelector('.about h2')
    title.style.opacity = window.scrollY * .003
    
    if(window.scrollY > 350){
      let img = document.querySelector('.aboutImg img')
      let text = document.querySelector('.about p')

      img.classList.add('active')
      text.classList.add('active')
    }
  }

  render() {
    window.addEventListener('scroll', this.scroll)
    const body = (
      <>
      <div className="aboutImg">
        <img src={aboutImg} alt="programming on computer"/>
      </div>
      <p>Od 2017 zajmuję się programowaniem w kierunku front-end, posiadając podstawową wiedzę z HTML5, CSS3 oraz JavaScript ciągle doskonalę swoją wiedzę w zakresie frameworka React czy preprocesora Sass, co przy pomocy frameworka Express pozwala połączyć się z bazą danych MongoDB. Połączenie tego wszystkiego pozwala na tworzenie zarówno prostych jednostronnych wizytówek, jak i rozbudowanych serwisów do usprawnienia pracy oraz zaoszczędzenia cennego czasu.</p>
      </>
    )

    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    )
  }
}