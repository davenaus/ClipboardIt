import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// Main Component
interface HeaderProps {
  onDownloadClick?: () => void;
}

const HeaderWithAnnouncement: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date('2025-12-31T23:59:59').getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <div style={{ position: 'relative' }}>
        {showBanner && (
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            color: 'white',
            padding: '12px 20px',
            marginBottom: '30px',
            borderRadius: '12px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <span style={{ fontWeight: '600' }}>🎉 Launch Sale:</span>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Ends in</span>
              <div style={{ 
                display: 'flex', 
                gap: '4px',
                fontFamily: 'monospace',
                fontWeight: '600'
              }}>
                <span>{timeLeft.days}d</span>
                <span>{timeLeft.hours.toString().padStart(2, '0')}h</span>
                <span>{timeLeft.minutes.toString().padStart(2, '0')}m</span>
                <span>{timeLeft.seconds.toString().padStart(2, '0')}s</span>
              </div>
            </div>

            {onDownloadClick ? (
              <button
                onClick={onDownloadClick}
                style={{
                  background: 'white',
                  color: 'var(--primary)',
                  padding: '6px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Get 20% OFF
              </button>
            ) : (
              <a 
                href="https://exchange.adobe.com/apps/cc/203487/clipboard-it" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'white',
                  color: 'var(--primary)',
                  padding: '6px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Get 20% OFF
              </a>
            )}

            <button 
              onClick={closeBanner}
              style={{
                position: 'absolute',
                top: '50%',
                right: '12px',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              ×
            </button>
          </div>
        )}
        
        <nav className="nav" style={{ marginTop: showBanner ? '0' : '0' }}>
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
              </>
            ) : (
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
    </div>
  );
};

// Header without announcement for other pages
const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
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

export default HeaderWithAnnouncement;
export { Header };