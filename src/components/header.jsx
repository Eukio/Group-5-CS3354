import React from 'react'
import utdLogo from '../assets/utd-image.png';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar.jsx';

export default function Header() {
  return (
    <div class="header">
        <div class="left-section">
        <div class="title">UTD BULLETIN BOARD</div>
        <img src={utdLogo} class="logo" alt="UTD Logo" />
    </div>
   <SearchBar/>
    <div class="icons">
        <div className="icon">
        <Link to="/home" className='header-button'>
            <i class="fa-solid fa-house"></i>
        </Link>
        </div>
        <div className="icon">
            <Link to="/user" className='header-button'>
                <i class="fa-solid fa-user"></i>
            </Link>
        </div>
    </div>
    </div>
  )
}
