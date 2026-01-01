import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

interface HeaderProps {
  onDownloadClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    closeMenu();
    // Force full page navigation to home page with hash
    window.location.href = `/${hash}`;
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
            
            <Link to="/blog" onClick={closeMenu} className="nav-link">
              Blog
            </Link>
          </>
        ) : (
          <>
            <a
              href="/#how-it-works"
              onClick={(e) => handleHashNavigation(e, '#how-it-works')}
              className="nav-link"
            >
              How It Works
            </a>

            <a
              href="/#features"
              onClick={(e) => handleHashNavigation(e, '#features')}
              className="nav-link"
            >
              Features
            </a>

            <a
              href="/#pricing"
              onClick={(e) => handleHashNavigation(e, '#pricing')}
              className="nav-link"
            >
              Pricing
            </a>

            <Link to="/blog" onClick={closeMenu} className="nav-link">
              Blog
            </Link>
          </>
        )}
        
        {onDownloadClick ? (
          <button
            onClick={onDownloadClick}
            className="cta-button"
            style={{
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Download
          </button>
        ) : (
          <a 
            href="https://exchange.adobe.com/apps/cc/203487/clipboard-it" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        )}
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
export { Header };