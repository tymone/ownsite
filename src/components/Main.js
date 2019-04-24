//scrolle do pozostałych img

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

      if (scrollValue > imgFromTop / 2) {
        $('.wrap .wrapLeft img').addClass('scroll');
      }
      if (scrollValue > img2FromTop - 500) {
        $('.wrap .wrapRight img').addClass('scroll')
      }


      if (scrollValue < 100) {
        $('.wrap .wrapLeft img, .wrap .wrapRight img').removeClass('scroll');
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
            <p> Strona na której obecnie się znajdujesz jest w pełni responsywna na wszystkich urządzeniach, od małych ekranów smartfonów, po wysokiej rozdzielczości ekrany monitorów komputerowych. Nowoczesna i stworzona zgodnie z aktualnymi standardami z wykorzystaniem technologii takich jak:</p>
            <img src={html_logo} alt="html" />
            <img src={css_logo} alt="css" />
            <img src={js_logo} alt="js" />
            <img src={react_logo} alt="react" />
          </div>
          <div className="wrapRight">
            <p>Nowoczesna i stworzona zgodnie z aktualnymi standardami. Jest zoptymalizowana pod kątem wyszukiwarek internetowych.</p>
            <img src={google_logo} alt="html" />
          </div>
        </section>
        <section className='project clearfix'>
          <h2>Moje projekty</h2>
          <h3>Portal Ratownika</h3>
          <p>Aktualnie zajmuję się projektem dla mojej obecnej pracy, póki co jest to projekt 'do szuflady' w celu rozwijania umiejętności programistycznych, gdzie wykorzystuję technologie takie jak: HTML5, CSS3(Sass), Java Script(ES6, React), Python(Flask), MongoDB. </p>
          <img src={printscr} alt="printscreen" />
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
          <p><i className="fas fa-mobile-alt"></i> 509-767-794</p>
          <p><i className="far fa-envelope"></i> tymoteusz.hryniewiecki@gmail.com</p>
          <p><i className="fab fa-facebook-square"></i> facebook</p>
          <p><i className="fab fa-linkedin"></i> linkedin</p>
        </section>
      </main >
    )
  }
}