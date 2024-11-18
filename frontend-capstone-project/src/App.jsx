import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navigation bar
import Footer from './components/Footer'; // Footer
import HeroSection from './components/HeroSection'; // Home page hero section
import SpecialsSection from './components/SpecialsSection'; // Specials section
import TestimonialsSection from './components/TestimonialsSection'; // Testimonials
import AboutSection from './components/AboutSection'; // About page section
import BookingPage from './components/BookingPage'; // Booking Page

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Routes define each page of the app */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <SpecialsSection />
              <TestimonialsSection />
              <AboutSection />
            </>
          }
        />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
