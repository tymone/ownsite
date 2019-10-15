import React, { Component } from 'react';
import axios from 'axios';
import Template from './Template.js';

export default class Contact extends Component {
  state = {
    class: 'contact',
    title: 'Kontakt',
    name:'',
    email: '',
    message: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newMessage = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString()
    };

    axios
      .post('http://www.tymon-dev.pl', newMessage)
      .then(res => console.log(res.data))
      .then(alert('Pomyślnie wysłano wiadomość.'))

    this.setState({
      name:'',
      email: '',
      message: ''
    });
  };

  scroll = () => {
    window.addEventListener('scroll', () => {

      if(window.scrollY > 2100){
        let inputName = document.querySelector('.contact input[name=name]')
        let inputEmail = document.querySelector('.contact input[name=email]')
        let textarea = document.querySelector('.contact textarea')
        let btn = document.querySelector('.contact button')
      
        inputName.classList.add('active')
        inputEmail.classList.add('active')
        textarea.classList.add('active')
        btn.classList.add('active')
      }
    })
  }

  render() {
    this.scroll()
    const body = (
      <>        
        <form onSubmit={this.onSubmit}>
          <div className="inputBox">
            <input type='text' value={this.state.name} onChange={this.handleChange} name='name' required />
            <label> Imię</label>
          </div>
          <div className='inputBox'>
            <input
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
              name='email'
              required
            />
            <label>e-mail</label>
          </div>
          <div className="inputBox">
            <textarea
              name='message'
              value={this.state.message}
              onChange={this.handleChange} required
            />
            <label>Wiadomość</label>
          </div>
          <button>Wyślij</button>
        </form>
        <div className='contactRightSide'>
          <p>
            <a href='tel:509-767-794' rel="noopener noreferrer" target="_blank">
              <i className='fas fa-mobile-alt' /> zadzwoń
            </a>
          </p>
          <p>
            <a href='mailto:tymoteusz.hryniewiecki@gmail.com' rel="noopener noreferrer" target="_blank">
              <i className='far fa-envelope' /> wyślij e-mail
            </a>
          </p>
          <p>
            <a href='https://m.me/tymoteusz.hryniewiecki' rel="noopener noreferrer" target="_blank">
              <i className='fab fa-facebook-square' /> Facebook
            </a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/tymoteusz-hryniewiecki/' rel="noopener noreferrer" target="_blank">
              <i className='fab fa-linkedin' /> LinkedIn
            </a>
          </p>
          <p>
            <a href='https://github.com/tymone/' rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github" /> github
            </a>
          </p>
        </div>
      </>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
