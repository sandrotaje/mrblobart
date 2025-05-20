import React, { useState } from 'react';
import '../../styles/ImageModal.css';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageUrl} alt="Full size" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
