import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import canvasData from '../data/canvasData';
import ImageModal from '../components/Modal/ImageModal';
import '../styles/WallDetail.css';
import '../styles/ImageModal.css';

const CanvasDetail = () => {
  const { id } = useParams();
  const [canvas, setCanvas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const selectedCanvas = canvasData.find(item => item.id === parseInt(id));
    
    if (selectedCanvas) {
      setCanvas(selectedCanvas);
      setLoading(false);
    } else {
      setError('Canvas not found');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="wall-detail-page">
      <div className="wall-detail-hero">
        <h1>{canvas.title}</h1>
      </div>
      <div className="wall-detail-content-section">
        <div className="wall-detail-grid">
          <div className="wall-detail-image-container" onClick={openModal}>
            <img src={canvas.imageUrl} alt={canvas.title} />
          </div>
          <div className="wall-detail-info">
            <p className="wall-detail-description">{canvas.description}</p>
            <div className="wall-detail-details">
              <p><strong>Year:</strong> {canvas.year}</p>
              <p><strong>Dimensions:</strong> {canvas.dimensions}</p>
              <p><strong>Technique:</strong> {canvas.technique}</p>
              <p><strong>Status:</strong> {canvas.status}</p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal imageUrl={canvas.imageUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default CanvasDetail;
