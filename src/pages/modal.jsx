import React, { useState, useEffect } from 'react';
import "../styles/modal.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Modal = ({ isOpen, onClose, club }) => {
  const [organizerName, setOrganizerName] = useState('');

  useEffect(() => {
    const fetchOrganizerName = async () => {
      if (club?.organizerId) {
        const userRef = doc(db, "Users", club.organizerId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setOrganizerName(userSnap.data().displayName);
        } else {
          setOrganizerName("Unknown Organizer");
        }
      }
    };

    fetchOrganizerName();
  }, [club]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{club.name}</h2>
        <p>{club.description}</p>
        <p><strong>Members:</strong> {club.memberCount}</p>
        <p><strong>Organizer:</strong> {organizerName}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
