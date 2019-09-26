import React, { Component } from 'react';
import Template from './Template';

import aboutImg from '../images/cooperation.jpg';

export default class About extends Component {
  state = {
    class: 'about',
    title: 'O mnie'
  }

  render() {
    const body = (
      <>
      <div className="aboutImg">
        <img src={aboutImg} alt="programming on computer"/>
      </div>
      <p>Z początkiem 2017 roku rozpocząłem naukę programowania w kierunku front-end. Posiadając podstawową wiedzę z HTML5, CSS3 oraz Java Script ciągle doskonalę swoją wiedzę w zakresie frameworków takich jak React, ExpressJS czy preprocesora Sass. Co przy pomocy biblioteki takiej jak Axios pozwala swobodnie połączyć się z bazą danych MongoDB. Połączenie tego wszystkiego pozwala na tworzenie zarówno prostych jednostronnych wizytówek, jak i rozbudowanych serwisów do usprawnienia pracy w firmie.</p>
      </>
    )
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    )
  }
}