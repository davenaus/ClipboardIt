import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date('December 1, 2025').getTime() - new Date().getTime();
      
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
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '8px'
    }}>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.days}</span>
        <span style={{ fontSize: '10px', opacity: 0.8 }}>days</span>
      </div>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '10px', opacity: 0.8 }}>hrs</span>
      </div>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '10px', opacity: 0.8 }}>min</span>
      </div>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '10px', opacity: 0.8 }}>sec</span>
      </div>
    </div>
  );
};

// Main Component
const HeaderWithAnnouncement = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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
          background: 'linear-gradient(to right, var(--primary), var(--secondary))',
          color: 'white',
          padding: '10px 16px',
          marginBottom: '55px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1000,
          fontWeight: 500,
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          borderRadius: '10px 10px 10px 10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          {/* Launch Sale Tag */}
          <span style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            padding: '4px 10px', 
            borderRadius: '10px',
            fontWeight: '600'
          }}>
            LAUNCH SALE
          </span>
          
          
          {/* Timer Container */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.15)',
            padding: '4px 10px',
            borderRadius: '10px',
            gap: '12px'
          }}>
            <CountdownTimer />
            <span style={{ fontSize: '10px', opacity: 0.9 }}>time left</span>
          </div>
          
          {/* Buy Now Button */}
          <a 
            href="https://shop.austindavenport.com/products/clipboard-it" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'white',
              color: 'var(--primary)',
              padding: '4px 12px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '13px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}
          >
            20% OFF - Buy Now
          </a>
          
          {/* Close Button */}
          <button 
            onClick={closeBanner}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.15)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '14px',
              padding: 0,
              lineHeight: 1,
              transition: 'all 0.2s ease'
            }}
          >
            ✕
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
            href="https://shop.austindavenport.com/products/clipboard-it" 
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
    </div>
  );
};

export default HeaderWithAnnouncement;