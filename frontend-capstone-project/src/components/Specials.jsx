import React from 'react';
import '../styles/Specials.css';

function Specials() {
  return (
    <section className="specials-section">
      {/* Header with title and button */}
      <div className="specials-header">
        <h2 className="specials-title">Specials</h2>
        <button className="button">Online Menu</button>
      </div>

      {/* Dish Cards */}
      <div className="specials-container">
        <div className="special-card">
          <img src="/path-to-dish-image.jpg" alt="Dish 1" />
          <div className="dish-name-price">
            <h3>Dish Name</h3>
            <p className="price">$19.99</p>
          </div>
          <p>Description of the dish goes here.</p>
        </div>
        <div className="special-card">
          <img src="/path-to-dish-image.jpg" alt="Dish 2" />
          <div className="dish-name-price">
            <h3>Dish Name</h3>
            <p className="price">$22.99</p>
          </div>
          <p>Description of the dish goes here.</p>
        </div>
        <div className="special-card">
          <img src="/path-to-dish-image.jpg" alt="Dish 3" />
          <div className="dish-name-price">
            <h3>Dish Name</h3>
            <p className="price">$25.99</p>
          </div>
          <p>Description of the dish goes here.</p>
        </div>
      </div>
    </section>
  );
}

export default Specials;
