import React from 'react';
import '../styles/SpecialsSection.css';

function SpecialsSection() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2 className="specials-title">Specials</h2>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-dishes">
        {/* Dish 1 */}
        <div className="dish">
          <img src="/path-to-dish1.jpg" alt="Dish 1" className="dish-image" />
          <div className="dish-details">
            <div className="dish-title">
              <h3>Dish Name 1</h3>
              <span className="dish-price">$15</span>
            </div>
            <p className="dish-description">
              A brief description of the dish goes here. This dish is made with the finest ingredients.
            </p>
          </div>
        </div>

        {/* Dish 2 */}
        <div className="dish">
          <img src="/path-to-dish2.jpg" alt="Dish 2" className="dish-image" />
          <div className="dish-details">
            <div className="dish-title">
              <h3>Dish Name 2</h3>
              <span className="dish-price">$20</span>
            </div>
            <p className="dish-description">
              A brief description of the dish goes here. A wonderful meal to delight your taste buds.
            </p>
          </div>
        </div>

        {/* Dish 3 */}
        <div className="dish">
          <img src="/path-to-dish3.jpg" alt="Dish 3" className="dish-image" />
          <div className="dish-details">
            <div className="dish-title">
              <h3>Dish Name 3</h3>
              <span className="dish-price">$25</span>
            </div>
            <p className="dish-description">
              A brief description of the dish goes here. Carefully crafted by our expert chefs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialsSection;
