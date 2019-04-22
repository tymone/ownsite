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
      const windowWidth = $(document).outerWidth();
      const nav = $('nav');
      const ul = $('ul');
      const li = $('li');
      const i = $('li>i');
      if (windowWidth < 601) {
        nav.removeClass('sideNav');
        ul.removeClass('sideNav');
        li.removeClass('sideNav');
        i.removeClass('sideNav');
      } else if (scroll > headerHigh) {
        nav.addClass('sideNav');
        ul.addClass('sideNav');
        li.addClass('sideNav');
        i.addClass('sideNav');
      } else {
        nav.removeClass('sideNav');
        ul.removeClass('sideNav');
        li.removeClass('sideNav');
        i.removeClass('sideNav');
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
          <li onClick={this.scrollOnSection1}><i className="fas fa-home"></i>Start</li>
          <li onClick={this.scrollOnSection2}><i className="fas fa-project-diagram"></i>Projekty</li>
          <li onClick={this.scrollOnSection3}><i className="fas fa-user-tie"></i> O mnie</li>
          <li onClick={this.scrollOnSection4}><i className="fas fa-address-card"></i>Kontakt</li>
        </ul>
      </nav>
    )
  }
}
