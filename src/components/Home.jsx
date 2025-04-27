// src/pages/Home.jsx
import React from 'react';
import './home.css'; // Ensure you have home.css for the Hero section styling

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ken Mosquera</h1>
        <h2>3rd Year Mechanical Engineering Student</h2>
        <p>Your trusted partner for innovative engineering solutions.</p>
        <button className="cta-button">Discuss Your Project</button>
      </div>
      <div className="hero-image">
        <img src="your-headshot.jpg" alt="Ken Mosquera" className="headshot" />
      </div>
    </section>
  );
}

export default Home;
