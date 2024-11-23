import React from 'react';
import '../styles/AboutSection.css';
import marioAndAdrian1 from './images/Mario and Adrian A.jpg';
import marioAndAdrian2 from './images/Mario and Adrian b.jpg';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Left Side */}
        <div className="about-text">
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-description">
          We are a family owned <br />Mediterranean restaurant,<br /> focused on traditional <br />recipes served with a modern <br /> twist.
          </p>
        </div>

        {/* Right Side */}
        <div className="about-images">
          <img
            src={marioAndAdrian1}
            alt="About Us 1"
            className="about-image top-image"
          />
          <img
            src={marioAndAdrian2}
            alt="About Us 2"
            className="about-image bottom-image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;