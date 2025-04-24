import React from 'react'
import utdLogo from '../assets/utdLogo.png';
import searchIcon from '../assets/searchIcon.svg';
import userIcon from '../assets/userIcon.svg';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar.jsx';

export default function Header() {
  return (
  //   <div class="header">
      
  //       <div class="left-section">
  //       <div class="title">UTD BULLETIN BOARD</div>
  //         <img src={utdLogo} alt="UTD Logo" className="utd-logo" />
  //   </div>

    
  //  <SearchBar/>
  //   <div class="icons">
  //       <div className="icon">
  //       <Link to="/home" className='header-button'>
  //           <i class="fa-solid fa-house"></i>
  //       </Link>
  //       </div>
  //       <div className="icon">
  //           <Link to="/user" className='header-button'>
  //               <i class="fa-solid fa-user"></i>
  //           </Link>
  //       </div>
  //   </div>
  //   </div>
  <header className="header">
  <div className="logo-section">
    <span className="title">UTD BULLETIN BOARD</span>
    
  </div>  
    <img src={utdLogo} alt="UTD Logo" className="utd-logo" />

   <div className="search-section">
   <SearchBar className ="search-section"/>

   <Link to="/home" className="icon-button">
      <img src={searchIcon} alt="Search" className="icon" />
    </Link>

    {/* Make the user icon a button */}
    <Link to="/home" className="icon-button">
      <img src={userIcon} alt="User" className="icon" />
    </Link>
    
  </div> 
  
</header>

  )
}
/*
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

*/