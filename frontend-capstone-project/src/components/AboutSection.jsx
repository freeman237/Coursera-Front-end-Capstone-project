import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Left Side */}
        <div className="about-text">
          <h1 className="about-title">About Us</h1>
          <h2 className="about-subtitle">Our Journey</h2>
          <p className="about-description">
            Welcome to our story. We are a team of passionate individuals
            dedicated to delivering unforgettable experiences through our
            services. Our mission is to combine innovation, creativity, and
            quality to create something truly unique for our customers.
          </p>
        </div>

        {/* Right Side */}
        <div className="about-images">
          <img
            src="/path-to-image1.jpg"
            alt="About Us 1"
            className="about-image top-image"
          />
          <img
            src="/path-to-image2.jpg"
            alt="About Us 2"
            className="about-image bottom-image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
