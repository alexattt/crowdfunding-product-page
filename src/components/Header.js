import React from 'react';
import { useState } from 'react';

const Header = ({menuOpen, setMenuOpen}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", function() {
    setWindowWidth(window.innerWidth);
  });

  const toggleHamburgerMenu = () => {
    setMenuOpen(false);
  }

  const closeHamburgerMenu = () => {
    setMenuOpen(true);
  }

  return (
    <div className='header' style={menuOpen ? {zIndex: 5} : null}>
      <nav className='flex-row'>
        <img src="/logo.svg" alt="logo" />
        {windowWidth > 768 ? 
          <div className="nav-items flex-row">
            <p className="nav-item"><a href="#about">About</a></p>
            <p className="nav-item">Discover</p>
            <p className="nav-item">Get Started</p>
          </div>
          :
          <div className='burger-menu'>
            {menuOpen ? 
              <img src="/icon-close-menu.svg" alt="hamburger menu" onClick={toggleHamburgerMenu}/> :
              <img src="/icon-hamburger.svg" alt="hamburger menu" onClick={closeHamburgerMenu}/> }
            {menuOpen ? 
              <div className="nav-items-mobile flex-column">
                <p className="nav-item-mobile"><a href="#about">About</a></p>
                <hr/>
                <p className="nav-item-mobile">Discover</p>
                <hr/>
                <p className="nav-item-mobile">Get Started</p>
              </div>
              :
              null
            }
          </div>
        }
      </nav>
    </div>
  )
}

export default Header
