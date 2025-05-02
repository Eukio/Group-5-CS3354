import React, { useState, useEffect } from "react";
import "../styles/clubsPage.css";
import ClubCard from "../components/clubsCard";
import clubBanner from "../assets/utd_club_banner.png";
import Modal from "../pages/modal";
import "../styles/modal.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function ClubsPage() {
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch clubs from Firestore
  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Clubs"));
        const fetchedClubs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClubs(fetchedClubs);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubs();
  }, []);

  const handleCardClick = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
  };

  return (
    <div className="home-page">
      <img
        className="utd-01-2560-x-1440-2560-x-1440-1"
        src={clubBanner}
        alt="UTD Club Banner"
      />
      <div className="rectangle-10">
        <div className="text">UTD Clubs</div>
      </div>

      {/* Render clubs from Firebase */}
      <div className="club-card-container">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            name={club.name}
            image={club.logoUrl}
            onClick={() => handleCardClick(club)}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        club={selectedClub}
      />
    </div>
  );
}

export default ClubsPage;
