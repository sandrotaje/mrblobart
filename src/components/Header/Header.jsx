import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const logo = '/images/logo.avif';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mr Blob Logo" />
          </Link>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={isMenuOpen ? 'active' : ''}>
          <Link to="/about">About</Link>
          <Link to="/walls">Walls</Link>
          <Link to="/canvas">Canvas</Link>
          <Link to="/advWalls">ADV Walls</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
