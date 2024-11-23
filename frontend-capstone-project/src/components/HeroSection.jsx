import React from 'react';
import '../styles/HeroSection.css';
import restaurantFood from "./images/restaurantfood.jpg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-section">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-paragraph">
              We are a family owned <br />Mediterranean restaurant,<br /> focused on traditional <br />recipes served with a modern <br /> twist.
          </p>
          <button className="reserve-table-btn">Reserve a Table</button> {/* Add button */}
        </div>
        <div className="image-section">
          <img src={restaurantFood} alt="Our Story" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
