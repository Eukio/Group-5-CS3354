import React from 'react';
import utdLogo from '../assets/utdLogo.png';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar.jsx';

export default function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <Link to="/home" className="title-link">
          <span className="title">UTD BULLETIN BOARD</span>
        </Link>
      </div>

      <div className="center-section">
        <Link to="/home">
          <img src={utdLogo} alt="UTD Logo" className="utd-logo-centered" />
        </Link>
      </div>

      <div className="right-section">
        <SearchBar />
        <Link to="/user" className="header-button">
          <i className="fa-solid fa-user icon"></i>
        </Link>
      </div>
    </header>
  );
}
