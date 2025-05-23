import React from 'react';
import { Link } from 'react-router-dom';
import wallsData from '../data/wallsData';
import PageHero from '../components/PageHero';
import '../styles/Walls.css';

const Walls = () => {
  return (
    <div className="walls-page">
      <PageHero title="Walls Collection" />
      <div className="about-content-section">
        <div className="walls-grid">
          {wallsData.map((wall) => (
            <Link to={`/walls/${wall.id}`} key={wall.id} className="wall-item">
              <div className="wall-image-container">
                <img src={wall.imageUrl} alt={wall.title} />
                <div className="wall-overlay">
                  <h3>{wall.title}</h3>
                  <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {wall.description.split('\n').slice(0, 3).join('\n')}
                  </p>
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
