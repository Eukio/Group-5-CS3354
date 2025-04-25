import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

import { AuthContext } from '../context/AuthContext';

import utdLogo from '../assets/utdLogo.png';
import banner from '../assets/banner.png';
import createClub from '../assets/createClub.svg';
import createPost from '../assets/createPost.svg';
import createEvent from '../assets/createEvent.svg';

function Home() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home-page">
      {/* Welcome Banner */}
      <section className="banner">
        <h1>Welcome,<br />{currentUser?.displayName || 'User'}!</h1>
        <img src={banner} alt="Campus" />
      </section>

      {/* Action Cards */}
      <section className="cards">
        <div className="card">
          <img src={createClub} alt="Create Club" />
          <h2>Create Club</h2>
          <button onClick={() => navigate('/createClub')}>Create</button>
        </div>

        <div className="card">
          <img src={createPost} alt="Create Post" />
          <h2>Create a Post</h2>
          <button onClick={() => navigate('/createPost')}>Post</button>
        </div>

        <div className="card">
          <img src={createEvent} alt="Create Event" />
          <h2>Create an Event</h2>
          <button onClick={() => navigate('/createEvent')}>Create</button>
        </div>

        {/* View Clubs Card */}
        <div className="card">
          <img src={utdLogo} alt="View Clubs" />
          <h2>View Clubs</h2>
          <button onClick={() => navigate('/clubs')}>Explore</button>
        </div>

        {/* View Posts Card */}
        <div className="card">
          <img src={createPost} alt="View Posts" />
          <h2>View Posts</h2>
          <button onClick={() => navigate('/posts')}>Explore</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
