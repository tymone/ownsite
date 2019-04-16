import React from 'react';
import '../styles/Main.css';

import html_logo from '../images/html_logo.png';
import css_logo from '../images/css_logo.png';
import js_logo from '../images/js_logo.png';
import react_logo from '../images/react_logo.png';
import google_logo from '../images/google_logo.png';
import swimm from '../images/swimming.jpg';
import run from '../images/running.jpg';
import bjj from '../images/bjj.jpg';
import mountain from '../images/mountain.jpg';
import printscr from '../images/printscreen.png';

const Main = () => {

  return (
    <main>
      <h2>Witam na mojej stronie</h2>
      <section className='wrap'>
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
      <h2>Moje projekty</h2>
      <section className='project'>
        <h3>Portal Ratownika</h3>
        <p>Aktualnie zajmuję się projektem dla mojej obecnej pracy, póki co jest to projekt 'do szuflady' w celu rozwijania umiejętności programistycznych, gdzie wykorzystuję technologie takie jak: HTML5, CSS3(Sass), Java Script(ES6, React), Python(Flask), MongoDB. </p>
        <img src={printscr} alt="printscreen" />
      </section>
      <h2>O mnie</h2>
      <section className='about'>
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
      <h2>Kontakt</h2>
      <section className='contact'>
        <p><i class="fas fa-mobile-alt"></i> 509-767-794</p>
        <p><i class="far fa-envelope"></i> mail</p>
        <p><i class="fab fa-facebook-square"></i> facebook</p>
        <p><i class="fab fa-linkedin"></i> linkedin</p>
      </section>
    </main >
  )
}

export default Main