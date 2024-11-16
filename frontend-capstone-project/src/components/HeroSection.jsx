import React from 'react';
import '../styles/HeroSection.css';
import restauranfood from '../restauranfood.jpg';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-section">
          <h1 className="hero-title">Welcome to Our Website</h1>
          <h2 className="hero-subtitle">Discover Our Story</h2>
          <p className="hero-paragraph">
            We are dedicated to providing the best experience for our customers. Our story is one of passion, commitment, and excellence. Explore what makes us unique and why our clients trust us to deliver quality.
          </p>
          <button className="reserve-table-btn">Reserve a Table</button>
        </div>
        <div className="image-section">
          <img src={restauranfood} alt="Our Story" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
