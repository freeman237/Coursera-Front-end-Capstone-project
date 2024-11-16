import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/path-to-logo.svg" alt="Logo" className="logo" />
        </div>

        {/* Doormat Menu */}
        <div className="footer-menu">
          <h4 className="footer-title">Doormat Menu</h4>
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <p>Email: contact@restaurant.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Food Street, Flavor Town</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/path-to-facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src="/path-to-twitter-icon.svg" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/path-to-instagram-icon.svg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src="/path-to-linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
