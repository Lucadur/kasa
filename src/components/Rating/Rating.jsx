import React from 'react';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../styles/Rating.css"

const Rating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);

  // Fonction pour générer les étoiles
  const renderStars = () => {
    const stars = [];

    // Étoiles pleines (rouges)
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="active-star" />);
    }

    // Étoiles vides (grisées)
    while (stars.length < maxStars) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={faStar} className="inactive-star" />);
    }

    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
};

export default Rating;
