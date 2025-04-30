import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import { AuthContext } from '../context/AuthContext';
import banner from '../assets/banner.png';
import createClub from '../assets/createClub.svg';
import createPost from '../assets/createPost.svg';
import createEvent from '../assets/createEvent.svg';


function Home() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home-page">
     

      <section className="banner">
        <h1>Welcome, {currentUser?.displayName || 'User'}!</h1>
        <img src={banner} alt="Campus" />
      </section>

      <section className="cards">
        <div className="card" onClick={() => navigate('/myClub')}>
          <img src={createClub} alt="Create Club" />
          <h2>Create Club</h2>
          <button>Create</button>
        </div>
        <div className="card" onClick={() => navigate('/myPost')}>
          <img src={createPost} alt="Create Post" />
          <h2>Create a Post</h2>
          <button>Post</button>
        </div>
        <div className="card" onClick={() => navigate('/myEvent')}>
          <img src={createEvent} alt="Create Event" />
          <h2>Create an Event</h2>
          <button>Create</button>
        </div>
      </section>

     
    </div>
  );
}

export default Home;