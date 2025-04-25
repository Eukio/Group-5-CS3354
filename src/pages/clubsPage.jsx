import React, {useState} from "react";
import "../styles/clubsPage.css";
import ClubCard from "../components/clubsCard"; 
import clubsData from "../assets/testData"; 
import clubBanner from "../assets/utd_club_banner.png";
import Modal from "../pages/modal";
import "../styles/modal.css";

function ClubsPage() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
  }

  return (
      <div className="home-page">
        <img className="utd-01-2560-x-1440-2560-x-1440-1" src={clubBanner}></img>
        <div className="rectangle-10">
          <div className="text">UTD Clubs</div>
        </div>

        {/* Grab each club */}
        <div className="club-card-container">
        {clubsData.map((club) => (
          <ClubCard key={club.id} name={club.name} image={club.image} onClick={() => handleCardClick(club)}/>
        ))}
        </div>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal} club={selectedClub}/>
        
      </div>
  );
}

export default ClubsPage;
