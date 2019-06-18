import React, { Component } from 'react';
import axios from 'axios';
import Template from './Template.js';

export default class Contact extends Component {
  state = {
    class: 'contact',
    title: 'Kontakt',
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
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post('http://www.tymon-dev.pl', newMessage)
      .then(res => console.log(res.data));

    this.setState({
      email: '',
      message: ''
    });
  };

  render() {
    const body = (
      <React.Fragment>
        <div className='leftSide'>
          <p>
            <a href='tel:509-767-794'>
              <i className='fas fa-mobile-alt' /> 509-767-794
            </a>
          </p>
          <p>
            <a href='mailto:tymoteusz.hryniewiecki@gmail.com'>
              <i className='far fa-envelope' />
              wyślij e-mail
            </a>
          </p>
          <p>
            <a href='https://m.me/tymoteusz.hryniewiecki'>
              <i className='fab fa-facebook-square' /> facebook
            </a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/tymoteusz-hryniewiecki/'>
              <i className='fab fa-linkedin' /> linkedin
            </a>
          </p>
        </div>
        <div className='rightSide'>
          <form onSubmit={this.onSubmit}>
            <input
              type='text'
              value={this.state.email}
              onChange={this.handleChange}
              name='email'
              placeholder='podaj adres e-mail'
            />
            <textarea
              placeholder='Wiadomość'
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button>Wyślij</button>
          </form>
        </div>
      </React.Fragment>
    );
    return (
      <Template class={this.state.class} title={this.state.title} body={body} />
    );
  }
}
