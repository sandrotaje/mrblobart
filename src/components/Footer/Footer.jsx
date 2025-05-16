import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img 
              src="https://simpleicons.org/icons/instagram.svg" 
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img 
              src="https://simpleicons.org/icons/facebook.svg" 
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img 
              src="https://simpleicons.org/icons/youtube.svg" 
              alt="YouTube"
              className="social-icon"
            />
          </a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Mr Blob Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
