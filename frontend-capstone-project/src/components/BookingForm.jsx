import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css"; // Optional: Add styles if needed
import { submitAPI } from "../utils/api";

export const isFormValid = (formData) => {
  return (
    formData.date &&
    formData.time &&
    formData.guests > 0 &&
    formData.guests <= 10 &&
    formData.occasion
  );
};

const BookingForm = ({ availableTimes, updateTimes }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update available times if the date is updated
    if (name === "date") {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (isFormValid(formData)) {
      // Submit the data and navigate to confirmation page
      if (submitAPI(formData)) {
        navigate("/confirmed-booking");
      } else {
        alert("Failed to submit the booking. Please try again.");
      }
    } else {
      alert("Please fill in all the fields correctly.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} data-testid="booking-form">
      <h2>Book Your Table</h2>

      {/* Date Input */}
      <label htmlFor="date">Choose Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />

      {/* Time Select */}
      <label htmlFor="time">Choose Time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>
          Select Time
        </option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* Guests Input */}
      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleInputChange}
        min="1"
        max="10"
        required
      />

      {/* Occasion Select */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>
          Select Occasion
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Submit Button */}
      <button type="submit" disabled={!isFormValid(formData)}>
        Make Reservation
      </button>
    </form>
  );
};

export default BookingForm;
