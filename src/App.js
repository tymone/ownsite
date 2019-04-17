import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </body>
    );
  }
}

export default App;
