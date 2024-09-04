import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([
    `${process.env.PUBLIC_URL}/image.png`,
    `${process.env.PUBLIC_URL}/image.png`,
    `${process.env.PUBLIC_URL}/image.png`
  ]);

  const handleAddImage = () => {
    const newImage = `${process.env.PUBLIC_URL}/image.png`;
    setImages([...images, newImage]);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-controls">
          <button className="gallery-add-button" onClick={handleAddImage}>+ Add Image</button>
          <button className="gallery-control-button">
            <FaArrowLeft />
          </button>
          <button className="gallery-control-button">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className={`gallery-grid ${images.length > 3 ? 'expanded' : ''}`}>
        {images.map((src, index) => (
          <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
