import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";

// Simulating an API fetch function
const fetchData = (date) => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return availableTimes;
};

// Simulating an API submit function
const submitAPI = (formData) => {
  console.log("Submitting form data:", formData);
  return true; // Simulate a successful API response
};

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });
  const [localAvailableTimes, setLocalAvailableTimes] = useState([]);

  useEffect(() => {
    if (formData.date) {
      const times = fetchData(new Date(formData.date));
      setLocalAvailableTimes(times);
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmation"); // Navigate to confirmation page on successful submission
    } else {
      console.error("Failed to submit form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">--Select a time--</option>
        {localAvailableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">--Select an occasion--</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" style={{ padding: "10px", fontSize: "16px" }}>
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
