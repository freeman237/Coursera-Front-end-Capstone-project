import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home"; // Import Home component
import BookingPage from "./components/BookingPage"; // Import BookingPage component
import ConfirmedBooking from "./components/ConfirmedBooking"; // Import ConfirmedBooking component
import AboutSection from "./components/AboutSection"; // Import About component
import Specials from "./components/Specials"; // Import Menu component
import Footer from "./components/Footer"; // Import Contact component

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Booking page route */}
        <Route path="/booking" element={<BookingPage />} />

        {/* Booking confirmation page route */}
        <Route path="/confirmation" element={<ConfirmedBooking />} />

        {/* About page route */}
        <Route path="/about" element={<About />} />

        {/* Menu page route */}
        <Route path="/menu" element={<Menu />} />

        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
