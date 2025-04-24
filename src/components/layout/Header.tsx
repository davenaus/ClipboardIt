import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img 
          src="https://64.media.tumblr.com/b52566e7c7ae10740f53dd219422abc8/932095f6b0e76ae6-bc/s2048x3072/70563b3b63d600e8091f2394f007b794944788e3.pnj"
          alt="Clipboard It Logo" 
          className="logo-image" 
        />
      </Link>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {isHomePage ? (
          // Show ScrollLinks for smooth scrolling on home page
          <>
            <ScrollLink 
              to="how-it-works" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={closeMenu}
              className="nav-link"
            >
              How It Works
            </ScrollLink>
            
            <ScrollLink 
              to="features" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={closeMenu}
              className="nav-link"
            >
              Features
            </ScrollLink>
            
            <ScrollLink 
              to="pricing" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={closeMenu}
              className="nav-link"
            >
              Pricing
            </ScrollLink>
          </>
        ) : (
          // Show regular links to home page sections when not on home page
          <>
            <a href="/#how-it-works" onClick={closeMenu} className="nav-link">
              How It Works
            </a>
            
            <a href="/#features" onClick={closeMenu} className="nav-link">
              Features
            </a>
            
            <a href="/#pricing" onClick={closeMenu} className="nav-link">
              Pricing
            </a>
          </>
        )}
        
        
        <a 
          href="https://shop.austindavenport.com/" 
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>

      <div 
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Header;