// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
import '../styles/Header.css'
import SearchIcon from './assets/SearchIcon.svg'
// import MobileHeaderToggle from './MobileHeaderToggle';
import CompanyLogo from './assets/CompanyLogo.png'

export default function Header() {
//   const [toggle, setToggle] = useState(true);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

  return (
    <header className="header">
      <div className="nav-items__container">
      <div className=''>
        <img src={CompanyLogo} alt="logo" />
      </div>
        <ul className="nav-items__links">
          <li>
            <a href="/" className="nav-items__link">About Us</a>
          </li>
          <li>
            <a href="/" className="nav-items__link">Features</a>
          </li>
          <li>
            <a href="/" className="nav-items__link">For Business</a>
          </li>
        </ul>
      </div>
      <div className='header__search-bar--container'>
        <label htmlFor="search" >
          <div className="header__search-bar">
          <div className = 'search-icon__container'>
            <img src={SearchIcon} alt='search icon' />
            </div>
            <input type="text" id="search" placeholder="Search for city" className="header__search-input" />
            </div>
        </label>
        <button type="button" className="nav-cta__btn">Sign up</button>
      </div>
    </header>
  );
}
