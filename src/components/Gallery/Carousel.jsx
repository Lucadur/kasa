import React, { useState } from 'react';
import "../../styles/Carousel.css"

const Carousel = ({ photos }) => {

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const isSinglePhoto = photos.length === 1;

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  if (!photos || photos.length === 0) {
    return null; 
  }

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <div className="carousel">
      <div className="image-container">
        <img className="carousel-photo" src={currentPhoto} alt={currentPhoto} />
        {!isSinglePhoto && (
        <div className="arrows">
          <div className="left-arrow" onClick={handlePrev}>
            &#8249;
          </div>
          <div className="right-arrow" onClick={handleNext}>
            &#8250;
          </div>
        </div>
      )}
      {!isSinglePhoto && (
        <div className="photo-counter">{`${currentPhotoIndex + 1}/${photos.length}`}</div>
      )}
      </div>
    </div>
  );
};

export default Carousel;
