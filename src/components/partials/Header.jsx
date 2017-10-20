import React, { Component } from 'react';
import Logo from '../../imgs/citybike.png';
import Nav from './Nav';
import App from '../../App.css';

class Header extends Component {

  render() {
   // console.log('inside header', this.props.currentUser)
    return (
      <header>
        <a href='http://localhost:3000/'>
        <img src={Logo} className="logo" alt="logo" />
        </a>
        <Nav />

      </header>
    );
  };
}

export default Header;
