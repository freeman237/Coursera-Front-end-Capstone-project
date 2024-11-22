import React from 'react';
import BookingForm from './BookingForm';
import '../styles/BookingPage.css'; // Add your page styles here

function BookingPage() {
  return (
    <section className="booking-page">
      <header className="booking-header">
        <h1 className="booking-title">Book Your Table</h1>
        <p className="booking-description">
          Reserve your table now to enjoy an unforgettable dining experience!
        </p>
      </header>

      <section className="booking-form-container">
        <BookingForm />
      </section>
    </section>
  );
}

export default BookingPage;
