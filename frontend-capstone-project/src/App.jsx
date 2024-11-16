import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Navbar will always be displayed */}
      <Navbar />

      {/* Define Routes */}
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
        <Route path="/specials" element={<SpecialsSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>

      {/* Footer will always be displayed */}
      <Footer />
    </Router>
  );
}

export default App;
