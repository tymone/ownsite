import React from 'react';
import '../styles/Nav.css';
import $ from 'jquery';


export default class Nav extends React.Component {

  navbarFunc = () => {
    $('.fa-times, nav, ul, li').toggleClass('active');
  }

  hideNav = () => {
    $(document).on('scroll', function () {
      const scroll = $(document).scrollTop();
      const headerHigh = $('Header').height();
      const nav = $('nav')
      if (scroll < headerHigh) {
        nav.css('opacity', 1 - scroll / headerHigh)
      } else {
        nav.css('opacity', 0);
      }
    })
  }


  scrollOnSection1 = () => {
    $('body, html').animate({ scrollTop: $('.wrap').offset().top })
  }
  scrollOnSection2 = () => {
    $('body, html').animate({ scrollTop: $('.project').offset().top })
  }
  scrollOnSection3 = () => {
    $('body, html').animate({ scrollTop: $('.about').offset().top })
  }
  scrollOnSection4 = () => {
    $('body, html').animate({ scrollTop: $('.contact').offset().top })
  }


  render() {
    this.hideNav();
    return (
      <nav>
        <i className="fas fa-times" onClick={this.navbarFunc}></i>
        <ul>
          <li onClick={this.scrollOnSection1} className="s1">Start</li>
          <li onClick={this.scrollOnSection2}>Projekty</li>
          <li onClick={this.scrollOnSection3}>O mnie</li>
          <li onClick={this.scrollOnSection4}>Kontakt</li>
        </ul>
      </nav>
    )
  }
}
