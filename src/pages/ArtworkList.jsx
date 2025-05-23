import React from 'react';
import { Link } from 'react-router-dom';
import wallsData from '../data/wallsData';
import canvasData from '../data/canvasData';
import advWallsData from '../data/advWallsData';
import PageHero from '../components/PageHero';
import '../styles/ArtworkList.css';

const ArtworkList = ({ type }) => {
  // Map type to corresponding data and title
  const typeConfig = {
    walls: {
      data: wallsData,
      title: 'Walls Collection'
    },
    canvas: {
      data: canvasData,
      title: 'Canvas Collection'
    },
    advWalls: {
      data: advWallsData,
      title: 'ADV Walls'
    }
  };

  const { data, title } = typeConfig[type] || { data: [], title: 'Collection' };
  const artworks = data.map(item => ({ ...item, type }));

  return (
    <div className="artwork-list-page">
      <PageHero title={title} />
      <div className="about-content-section">
        <div className="artwork-list-grid">
          {artworks.map((artwork) => (
            <Link to={`/${artwork.type}/${artwork.id}`} key={artwork.id} className="artwork-item">
              <div className="artwork-image-container">
                <img src={artwork.imageUrl} alt={artwork.title} />
                <div className="artwork-overlay">
                  <h3>{artwork.title}</h3>
                  <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {artwork.description.split('\n').slice(0, 3).join('\n')}
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

export default ArtworkList;
