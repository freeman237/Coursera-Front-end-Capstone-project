import React from 'react';
import '../styles/Specials.css';
import greekSalad from './images/greek salad.jpg';
import bruchetta from './images/bruchetta.jpg';
import lemonDessert from './images/lemon dessert.jpg';

function Specials() {
  return (
    <section className="specials-section">
      {/* Header with title and button */}
      <div className="specials-header">
        <h2 className="specials-title">Specials</h2>
        <button className="online-menu-btn">Online Menu</button>
      </div>

      {/* Dish Cards */}
      <div className="specials-container">
        <section className="special-card">
          <img src={greekSalad} alt="Dish 1" />
          <div className="dish-name-price">
            <h3>Greek Salad</h3>
            <p className="price">$19.99</p>
          </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        </section>

        <section className="special-card">
          <img src={bruchetta} alt="Dish 2" />
          <div className="dish-name-price">
            <h3>Bruchetta</h3>
            <p className="price">$22.99</p>
          </div>
          <p>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        </section>

        <section className="special-card">
          <img src={lemonDessert} alt="Dish 3" />
          <div className="dish-name-price">
            <h3>Lemon Dessert</h3>
            <p className="price">$25.99</p>
          </div>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as it can be imagined.</p>
        </section>
      </div>
    </section>
  );
}

export default Specials;
