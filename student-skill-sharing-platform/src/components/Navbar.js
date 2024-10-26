// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create this file for custom styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Garissa University Skill Sharing</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/session">Sessions</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
