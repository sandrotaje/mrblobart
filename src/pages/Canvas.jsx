import React from 'react';
import { Link } from 'react-router-dom';
import canvasData from '../data/canvasData';
import '../styles/Walls.css';

const Canvas = () => {
  return (
    <div className="walls-page">
      <div className="walls-hero">
        <div className="hero-content">
          <h1>Canvas Collection</h1>
        </div>
      </div>
      <div className="walls-content-section">
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
