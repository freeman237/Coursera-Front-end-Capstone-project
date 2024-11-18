import React, { useState } from 'react';
import '../styles/BookingForm.css';

function BookingForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Reservation Submitted!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {/* Date Input */}
      <label htmlFor="date" className="form-label">
        Choose date
      </label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        className="form-input"
        required
      />

      {/* Time Input */}
      <label htmlFor="time" className="form-label">
        Choose time
      </label>
      <select
        id="time"
        value={formData.time}
        onChange={handleChange}
        className="form-select"
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      {/* Guests Input */}
      <label htmlFor="guests" className="form-label">
        Number of guests
      </label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        className="form-input"
        min="1"
        max="10"
        required
      />

      {/* Occasion Input */}
      <label htmlFor="occasion" className="form-label">
        Occasion
      </label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
        className="form-select"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Submit Button */}
      <input
        type="submit"
        value="Make Your Reservation"
        className="form-button"
      />
    </form>
  );
}

export default BookingForm;
