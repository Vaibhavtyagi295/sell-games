import React from 'react';
import './Nav.css'; // Import the CSS file for styling

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="company-name">Company Name</span>
        <img className="company-logo" src="logo.png" alt="Company Logo" />
      </div>
      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Search" />
      </div>
      <div className="navbar-right">
        <span className="nav-link">Home</span>
        <span className="nav-link">Products</span>
        <span className="nav-link">Fruits</span>
      </div>
    </nav>
  );
};

export default Navbar;
