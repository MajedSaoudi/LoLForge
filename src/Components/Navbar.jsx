import React from 'react'
import { useState } from 'react';
import logo from '../Assets/Images/Logo.png';
import './Navbar.css';

import burger from '../Assets/Images/Burger.png';
import close from '../Assets/Images/close.png';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div>
<nav className="navbar ">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/champions" className='flex gap-2 items-center' onClick={() => setIsMenuOpen(false)}>
            <svg height={20} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><path d="M8.997.667A8.333 8.333 0 0117.331 9v3.137a1.666 1.666 0 01-.922 1.49l-2.412 1.206v.834a2.5 2.5 0 01-2.353 2.496l-.188.004c.018-.091.03-.183.036-.275l.005-.142v-.417a1.667 1.667 0 00-1.541-1.662l-.125-.004H8.164a1.667 1.667 0 00-1.662 1.541l-.005.125v.417c0 .142.015.282.042.417h-.042a2.5 2.5 0 01-2.5-2.5v-.834l-2.411-1.206a1.666 1.666 0 01-.922-1.491V9A8.333 8.333 0 018.997.667zm-3.333 7.5a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zm6.667 0a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333z" fill="#5C5C8E"></path></svg>
            Champions</Link>
          </li>
          <li>
            <Link to="/Items" className='flex gap-2 items-center' onClick={() => setIsMenuOpen(false)}>
            <svg fill="none" height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.955 2.5L15 2.502l-9.847 9.849-1.18-1.179-1.178 1.179 2.062 2.062L2.5 16.771l1.178 1.178 2.358-2.357 2.062 2.062 1.179-1.178-1.179-1.18 9.855-9.853.002-2.943z" fill="#5C5C8E"></path></svg>
            Items</Link>
          </li>
          <li>
            <Link to="/Faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          </li>
        </ul>
        <div className="burger-container" onClick={toggleMenu}>
          <img
            src={burger}
            alt="Menu"
            className={isMenuOpen ? 'hidden' : 'block'}
          />
          <img
            src={close}
            alt="Close"
            className={isMenuOpen ? 'block' : 'hidden'}
          />
        </div>
      </nav>
        
    </div>
  )
}

export default Navbar