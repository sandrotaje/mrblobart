import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import wallsData from '../data/wallsData';
import canvasData from '../data/canvasData';
import advWallsData from '../data/advWallsData';
import ImageModal from '../components/Modal/ImageModal';
import '../styles/ArtworkDetail.css';
import '../styles/ImageModal.css';

const ArtworkDetail = ({ type }) => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Map type to corresponding data
  const typeToData = {
    walls: wallsData,
    canvas: canvasData,
    advWalls: advWallsData
  };

  // Find the specific artwork
  const artwork = typeToData[type]?.find(item => item.id === parseInt(id));
  
  // Add type to the artwork object if found
  const artworkWithType = artwork ? { ...artwork, type } : null;

  if (!artworkWithType) {
    return <div>Artwork not found</div>;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="artwork-detail-page">
      <div className="artwork-detail-hero">
        <h1>{artworkWithType.title}</h1>
      </div>
      <div className="artwork-detail-content-section">
        <div className="artwork-detail-grid">
          <div className="artwork-detail-image-container" onClick={openModal}>
            <img src={artworkWithType.imageUrl} alt={artworkWithType.title} />
          </div>
          <div className="artwork-detail-info">
            {artworkWithType.description && (
              <p className="artwork-detail-description">{artworkWithType.description}</p>
            )}
            <div className="artwork-detail-details">
              {artworkWithType.location && <p><strong>Location:</strong> {artworkWithType.location}</p>}
              {artworkWithType.year && <p><strong>Year:</strong> {artworkWithType.year}</p>}
              {artworkWithType.dimensions && <p><strong>Dimensions:</strong> {artworkWithType.dimensions}</p>}
              {artworkWithType.technique && <p><strong>Technique:</strong> {artworkWithType.technique}</p>}
              {artworkWithType.status && <p><strong>Status:</strong> {artworkWithType.status}</p>}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal imageUrl={artworkWithType.imageUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default ArtworkDetail;
