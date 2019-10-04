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
      message: this.state.message
    };

    axios
      .post('http://www.tymon-dev.pl', newMessage)
      .then(res => console.log(res.data));

    this.setState({
      name:'',
      email: '',
      message: ''
    });
  };

  scroll = () => {
    let title = document.querySelector('.contact h2')
    title.style.opacity = (window.scrollY - 1550) * .003

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
  }

  render() {
    
    window.addEventListener('scroll', this.scroll)
    const body = (
      <>        
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.name} onChange={this.handleChange} name='name' placeholder='podaj swoje imię' required />
          <input
            type='text'
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
            placeholder='podaj adres e-mail' required
          />
          <textarea
            placeholder='Wiadomość'
            name='message'
            value={this.state.message}
            onChange={this.handleChange} required
          />
          <button>Wyślij</button>
        </form>
      </>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
