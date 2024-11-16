import React from 'react';
import '../styles/TestimonialsSection.css';

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonials-grid">
        {/* Testimonial 1 */}
        <div className="testimonial-box">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <img
            src="/path-to-image1.jpg"
            alt="Customer 1"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">Customer 1</h3>
          <p className="testimonial-review">
            This place is amazing! The food is delicious, and the staff is super
            friendly.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-box">
          <div className="rating">⭐⭐⭐⭐</div>
          <img
            src="/path-to-image2.jpg"
            alt="Customer 2"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">Customer 2</h3>
          <p className="testimonial-review">
            Great experience! The atmosphere is cozy, and the food is fantastic.
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-box">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <img
            src="/path-to-image3.jpg"
            alt="Customer 3"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">Customer 3</h3>
          <p className="testimonial-review">
            Highly recommend! Everything was perfect, and the dishes were
            heavenly.
          </p>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial-box">
          <div className="rating">⭐⭐⭐⭐</div>
          <img
            src="/path-to-image4.jpg"
            alt="Customer 4"
            className="testimonial-image"
          />
          <h3 className="testimonial-name">Customer 4</h3>
          <p className="testimonial-review">
            Very nice experience! The food was flavorful, and the service was
            excellent.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
