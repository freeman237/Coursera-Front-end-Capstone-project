import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../utils/api"; // Ensure this file exists and is correctly imported
import "../styles/BookingForm.css"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const navigate = useNavigate();

  // Function to handle form submission
  const submitForm = (formData) => {
    const success = submitAPI(formData); // Simulate API call
    if (success) {
      navigate("/confirmed"); // Navigate to confirmation page if submission is successful
    } else {
      alert("Failed to submit booking. Please try again."); // Error handling
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData); // Call submitForm with current form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label htmlFor="guests">Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
