import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from './images/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <header className="navbar-content">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/specials">Specials</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>
      </header>
    </nav>
  );
}

export default Navbar;
