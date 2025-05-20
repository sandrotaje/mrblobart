import React from 'react';
import { Link } from 'react-router-dom';
import wallsData from '../data/wallsData';
import '../styles/Walls.css';

const Walls = () => {
  return (
    <div className="walls-page">
      <div className="walls-hero">
        <div className="hero-content">
          <h1>Walls Collection</h1>
        </div>
      </div>
      <div className="walls-content-section">
        <div className="walls-grid">
          {wallsData.map((wall) => (
            <Link to={`/walls/${wall.id}`} key={wall.id} className="wall-item">
              <div className="wall-image-container">
                <img src={wall.imageUrl} alt={wall.title} />
                <div className="wall-overlay">
                  <h3>{wall.title}</h3>
                  <p>{wall.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Walls;
