import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src="./logo.svg" alt="Logo" className="logo" />
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/specials">Specials</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/booking">Booking</Link></li> {/* New Link for Booking */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
