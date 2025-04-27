// src/components/Navbar.jsx (Updated)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Ken Mosquera</h1>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
        <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        <li><Link to="/about" className="nav-link">About Me</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
