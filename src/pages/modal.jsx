import React from 'react';
import "../styles/modal.css"; 

const Modal = ({ isOpen, onClose, club }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{club.name}</h2>
        <p>{club.description}</p>
        <p><strong>Members:</strong> {club.memberCount}</p>
        <p><strong>User ID:</strong> {club.organizerId}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
