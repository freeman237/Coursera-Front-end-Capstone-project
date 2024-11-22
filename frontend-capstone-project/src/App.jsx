import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
