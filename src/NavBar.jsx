// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Apply navbar class */}
      <ul className="nav-links"> {/* Apply nav-links class */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
