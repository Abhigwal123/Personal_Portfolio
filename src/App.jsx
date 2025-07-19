import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

      <Footer />
    </Router>
  );
}
