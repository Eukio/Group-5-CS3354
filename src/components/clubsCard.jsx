// ClubCard.jsx

import React from 'react';


function ClubCard({ name, image, onClick }) {
  return (
    <div className="club-card" onClick={onClick}>
      <img src={image} alt={name} className="club-card-image" />
      <div className="club-card-text">{name}</div>
    </div>
  );
}

export default ClubCard;
