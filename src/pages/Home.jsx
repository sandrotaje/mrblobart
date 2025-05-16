import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const indexImage = '/images/index.avif';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <h1>Mr Blob Art</h1>
            <p className="tagline">Transforming urban spaces with vibrant street art</p>
            <div className="cta-buttons">
              <Link to="/about" className="cta-button">About the Artist</Link>
              <Link to="/gallery" className="cta-button secondary">View Gallery</Link>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src={indexImage} 
            alt="Street Art by Mr Blob" 
            className="hero-image"
            loading="eager"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
