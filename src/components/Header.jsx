// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
import '../styles/Header.css'
// import MobileHeaderToggle from './MobileHeaderToggle';

export default function Header() {
//   const [toggle, setToggle] = useState(true);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

  return (
    <header className="header">
      <div>
        <img src="logo.png" alt="logo" />
      </div>
      <div className="nav-items__container">
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
        <label htmlFor="search" className="header__search-input">
          <input type="text" id="search" placeholder="Search for city" className="header__search-input" />
          {/* <CiSearch className="absolute text-2xl transform -translate-y-1/2 top-1/2 left-4" /> */}
        </label>
        <button type="button" className="nav-cta__btn">Sign up</button>
      </div>
    </header>
  );
}
