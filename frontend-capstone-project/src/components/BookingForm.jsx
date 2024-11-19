import React, { useState } from "react";
import "../styles/BookingForm.css";

function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  // Handle date changes and update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    // Logic to update availableTimes based on selectedDate
    // (Static data for now; can be enhanced later)
    const updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    setAvailableTimes(updatedTimes);

    setFormData((prev) => ({
      ...prev,
      date: selectedDate,
    }));
  };

  // Handle other input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h1 className="form-heading">Book Now</h1>

      {/* Date Field */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={handleDateChange}
        required
      />

      {/* Time Field */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* Guests Field */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        required
      />

      {/* Occasion Field */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Submit Button */}
      <input type="submit" value="Make Your Reservation" className="submit-btn" />
    </form>
  );
}

export default BookingForm;
