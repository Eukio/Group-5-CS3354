import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

import { AuthContext } from '../context/AuthContext';

import utdLogo from '../assets/utdLogo1.png';
import banner from '../assets/banner.png';
import createClub from '../assets/createClub.svg';
import createPost from '../assets/createPost.svg';
import createEvent from '../assets/createEvent.svg';
import userIcon from '../assets/userIcon.svg';
import searchIcon from '../assets/searchIcon.svg';

function Home() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo-section">
          <span className="title">UTD BULLETIN BOARD</span>
          <img src={utdLogo} alt="UTD Logo" className="utd-logo" />
        </div>
        <div className="search-section">
          <input type="text" placeholder="Enter Club Name" className="search-input" />
          <img src={searchIcon} alt="Search" className="icon" />
          <img src={userIcon} alt="User" className="icon" />
        </div>
      </header>

      <section className="banner">
        <h1>Welcome,<br />{currentUser?.displayName || 'User'}!</h1>
        <img src={banner} alt="Campus" />
      </section>

      <section className="cards">
        <div className="card">
          <img src={createClub} alt="Create Club" />
          <h2>Create Club</h2>
          <button onClick={() => navigate('/create-club')}>Create</button>
        </div>
        <div className="card">
          <img src={createPost} alt="Create Post" />
          <h2>Create a Post</h2>
          <button onClick={() => navigate('/create-post')}>Post</button>
        </div>
        <div className="card">
          <img src={createEvent} alt="Create Event" />
          <h2>Create an Event</h2>
          <button onClick={() => navigate('/create-event')}>Create</button>
        </div>
      </section>

      <footer className="footer">
        <p>EMAIL: yourcontact@utdallas.edu</p>
        <p>Contact: (999)999-9999</p>
      </footer>
    </div>
  );
}

export default Home;
