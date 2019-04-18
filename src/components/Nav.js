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

  render() {
    this.hideNav();
    return (
      <nav>
        <i className="fas fa-times" onClick={this.navbarFunc}></i>
        <ul>
          <li className='start'>Start</li>
          <li>Projekty</li>
          <li>O mnie</li>
          <li>Kontakt</li>
        </ul>
      </nav>
    )
  }
}
