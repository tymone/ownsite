import React from 'react';
import '../styles/Main.css';
import $ from 'jquery';

import html_logo from '../images/html_logo.png';
import css_logo from '../images/css_logo.png';
import js_logo from '../images/js_logo.png';
import react_logo from '../images/react_logo.png';
import google_logo from '../images/google_logo.png';
import printscr from '../images/printscreen.png';

export default class Main extends React.Component {

  scroll = () => {
    $(document).on('scroll', function () {
      const scrollValue = $(this).scrollTop();
      const img = $('.wrap .wrapLeft img');
      const imgFromTop = img.offset().top;
      const img2 = $('.wrap .wrapRight img');
      const img2FromTop = img2.offset().top;
      const img3 = $('.about .pictures .item')
      const img3FromTop = img3.offset().top;

      if (scrollValue > imgFromTop / 2) {
        $('.wrap .wrapLeft img').addClass('scroll');
      }
      if (scrollValue > img2FromTop - 500) {
        $('.wrap .wrapRight img').addClass('scroll');
      }
      if (scrollValue > img3FromTop - 700) {
        $('.about .pictures .item').addClass('scroll');
      }

      if (scrollValue < 100) {
        $('.wrap .wrapLeft img, .wrap .wrapRight img, .about .pictures .item').removeClass('scroll');
      }
    })
  }
  render() {
    this.scroll();
    return (
      <main>

        <section className='wrap'>
          <h2>Witam na mojej stronie</h2>
          <div className="wrapLeft">
            <p> Strona na której obecnie się znajdujesz jest w pełni responsywna na wszystkich urządzeniach, od małych ekranów smartfonów, po wysokiej rozdzielczości ekrany monitorów komputerowych. Stworzona z wykorzystaniem technologii takich jak:</p>
            <img src={html_logo} alt="html" />
            <img src={css_logo} alt="css" />
            <img src={js_logo} alt="js" />
            <img src={react_logo} alt="react" />
          </div>
          <div className="wrapRight">
            <p>Nowoczesna i zgodna z aktualnymi standardami. Jest zoptymalizowana pod kątem wyszukiwarek internetowych.</p>
            <img src={google_logo} alt="html" />
          </div>
        </section>
        <section className='project clearfix'>
          <h2>Moje projekty</h2>
          <h3>Portal Ratownika</h3>
          <p>Aktualnie zajmuję się projektem dla mojej obecnej pracy, póki co jest to projekt 'do szuflady' w celu rozwijania umiejętności programistycznych, gdzie wykorzystuję technologie takie jak: HTML5, CSS3(Sass), Java Script(ES6, React), Python(Flask), MongoDB.(<strong>póki co link do repozytorium.</strong>) </p>
          <a href='https://github.com/tymone/rescuer_portal'><img src={printscr} alt="printscreen" /></a>
        </section>
        <section className='about'>
          <h2>O mnie</h2>
          <p>Na codzień poza pracą na etacie jestem pasjonatem programowania oraz aktywnego trybu życia.</p>
          <div className="pictures">
            <div className="item">
              <p>Brazilian Jiu-Jitsu</p>
            </div>
            <div className="item">
              <p>Pływanie</p>
            </div>
            <div className="item">
              <p>Bieganie</p>
            </div>
            <div className='item'>
              <p>Wędrówki górskie</p>
            </div>
          </div>
        </section>
        <section className='contact'>
          <h2>Kontakt</h2>
          <p><a href='tel:509-767-794'><i className="fas fa-mobile-alt"></i> 509-767-794</a></p>
          <p><a href='mailto:tymoteusz.hryniewiecki@gmail.com'><i className="far fa-envelope"></i> tymoteusz.hryniewiecki@gmail.com</a></p>
          <p><a href='https://m.me/tymoteusz.hryniewiecki'><i className="fab fa-facebook-square"></i> facebook</a></p>
          <p><a href='https://www.linkedin.com/in/tymoteusz-hryniewiecki/'><i className="fab fa-linkedin"></i> linkedin</a></p>
        </section>

      </main >
    )
  }
}