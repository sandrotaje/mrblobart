import React from 'react';
import { Link } from 'react-router-dom';
import canvasData from '../data/canvasData';
import PageHero from '../components/PageHero';
import '../styles/Walls.css';

const Canvas = () => {
  return (
    <div className="walls-page">
      <PageHero title="Canvas Collection" />
      <div className="about-content-section">
        <div className="walls-grid">
          {canvasData.map((canvas) => (
            <Link to={`/canvas/${canvas.id}`} key={canvas.id} className="wall-item">
              <div className="wall-image-container">
                <img src={canvas.imageUrl} alt={canvas.title} />
                <div className="wall-overlay">
                  <h3>{canvas.title}</h3>
                  <p>{canvas.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
