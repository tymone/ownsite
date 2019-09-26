import React from "react";
import "../styles/style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2019 Tymoteusz Hryniewiecki </p>
      <div className='footerContact'>
          <p>
            <a href='tel:509-767-794'>
              <i className='fas fa-mobile-alt' /></a>
            </p>
          <p>
            <a href='mailto:tymoteusz.hryniewiecki@gmail.com'>
              <i className='far fa-envelope' />
            </a>
          </p>
          <p>
            <a href='https://m.me/tymoteusz.hryniewiecki'>
              <i className='fab fa-facebook-square' /> 
            </a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/tymoteusz-hryniewiecki/'>
              <i className='fab fa-linkedin' />
            </a>
          </p>
          <p>
            <a href='https://github.com/tymone/'>
              <i className="fab fa-github" />
                </a>
                </p>
        </div>
    </footer>
  );
};

export default Footer;
