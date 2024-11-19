import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      {/* Heading */}
      <h1 className="testimonials-title">What Our Customers Say</h1>

      {/* Testimonials Container */}
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <img
            src="./customer1.jpg"
            alt="Customer 1"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">John Doe</h3>
          <p className="testimonial-review">
            "Amazing experience! The food was delicious, and the service was top-notch."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-rating">⭐⭐⭐⭐</div>
          <img
            src="./customer2.jpg"
            alt="Customer 2"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">Jane Smith</h3>
          <p className="testimonial-review">
            "The ambiance was perfect, and the dishes were crafted beautifully. Highly recommended!"
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <img
            src="./customer3.jpg"
            alt="Customer 3"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">Emily Johnson</h3>
          <p className="testimonial-review">
            "Hands down, the best dining experience I’ve ever had."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-rating">⭐⭐⭐⭐</div>
          <img
            src="./customer4.jpg"
            alt="Customer 4"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">Mark Lee</h3>
          <p className="testimonial-review">
            "Great service, tasty food, and a cozy atmosphere. Will come back for sure!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
