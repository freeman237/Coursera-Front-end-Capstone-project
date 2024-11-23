import React from "react";
import "../styles/ConfirmedBooking.css"; // Link to your custom CSS for Confirmed Booking Page

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking-page">
      <header className="confirmed-booking-header">
        <h1 className="confirmed-booking-title">Booking Confirmed!</h1>
        <p className="confirmed-booking-message">
          Thank you for your reservation. We look forward to seeing you!
        </p>
      </header>
      {/* Footer will remain at the bottom as defined in global footer styles */}
    </div>
  );
};

export default ConfirmedBooking;

