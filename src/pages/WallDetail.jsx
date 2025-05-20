import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import wallsData from '../data/wallsData';
import ImageModal from '../components/Modal/ImageModal';
import '../styles/WallDetail.css';
import '../styles/ImageModal.css';

const WallDetail = () => {
  const { id } = useParams();
  const wall = wallsData.find(w => w.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!wall) {
    return <div>Wall not found</div>;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="wall-detail-page">
      <div className="wall-detail-hero">
        <h1>{wall.title}</h1>
      </div>
      <div className="wall-detail-content-section">
        <div className="wall-detail-grid">
          <div className="wall-detail-image-container" onClick={openModal}>
            <img src={wall.imageUrl} alt={wall.title} />
          </div>
          <div className="wall-detail-info">
            <p className="wall-detail-description">{wall.description}</p>
            <div className="wall-detail-details">
              <p><strong>Location:</strong> {wall.location}</p>
              <p><strong>Year:</strong> {wall.year}</p>
              <p><strong>Dimensions:</strong> {wall.dimensions}</p>
              <p><strong>Technique:</strong> {wall.technique}</p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal imageUrl={wall.imageUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default WallDetail;
