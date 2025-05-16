import React from 'react';
import { Link } from 'react-router-dom';
const logo = '/images/logo.avif';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mr Blob Logo" />
          </Link>
        </div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/walls">Walls</Link>
          <Link to="/canvas">Canvas</Link>
          <Link to="/adv-walls">ADV Walls</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
