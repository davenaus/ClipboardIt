import React, { useState, useEffect } from 'react';
import HeaderWithAnnouncement from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { homeStyles } from './styles';

// Feature Card Component
const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

// Pricing Feature Component
const PricingFeature: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li className="pricing-feature">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
      </svg>
      <span>{text}</span>
    </li>
  );
};

// Countdown Timer Component for Pricing Card
const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set target date to December 31, 2025
      const targetDate = new Date('2025-12-31T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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
      justifyContent: 'center', 
      gap: '8px',
      marginBottom: '3px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.days}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>days</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>hrs</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>min</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>sec</span>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <style>{homeStyles}</style>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <HeaderWithAnnouncement />

          <div className="hero-container">
            <div className="hero-content">
              <h1>Copy and Paste <span>For Premiere Pro.</span></h1>
              <p>Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste.</p>
            </div>
            <div className="hero-image">
              <video autoPlay muted loop playsInline className="hero-video">
                <source src="https://i.imgur.com/6sKufFH.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Open The Clipboard It Panel</h3>
              <p className="step-description">
                Open the extension in Premiere Pro and select your target folder and bin.
              </p>
              <div className="step-image-container">
                <img 
                  src="https://64.media.tumblr.com/87bdde71093888da6486f27a31d4752e/6f66bc9d9e28e330-b1/s1280x1920/dc62113dd536c43b66f9e3c23c2c3240214cbfd2.pnj"
                  alt="Select image" 
                  className="step-image" 
                />
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Copy Any Image</h3>
              <p className="step-description">
                Copy an image from anywhere — web pages, screenshots, or any application.
              </p>
              <div className="step-image-container">
                <img 
                  src="https://64.media.tumblr.com/7b69b86027d20036ed1d3b17592561b5/c4a6accf32e3f28a-18/s1280x1920/197d8e83d1038e334c810d08cd0b53a57ceb6fc8.pnj"
                  alt="Copy image" 
                  className="step-image" 
                />
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Click Paste & Repeat</h3>
              <p className="step-description">
                Click paste, and your image appears instantly in your bin. Back to editing.
              </p>
              <div className="step-image-container">
                <img 
                  src="https://64.media.tumblr.com/528b89ee6337bfba3a636acc7284b851/81a9450398d8a51b-d7/s1280x1920/76d6327ccfc614c3e797102ba9dc807644e6bfe8.pnj"
                  alt="Paste image" 
                  className="step-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Features</span>
            <h2 className="section-title">Made for Editors Who Move Fast</h2>
            <p className="section-description">
              A lightweight panel extension for Adobe Premiere that eliminates friction in your workflow.
            </p>
          </div>

          <div className="features-grid">
            <FeatureCard
              title="Instant Clipboard Pasting"
              description="Copy an image from anywhere — web, screenshots, apps — and paste it directly into your chosen Premiere bin. No saving required."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12H4M12 3V4M20 12H21M12 20V21M18.364 5.63604L17.6569 6.34315M5.63604 5.63604L6.34315 6.34315M6.34315 17.6569L5.63604 18.364M17.6569 17.6569L18.364 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
            />

            <FeatureCard
              title="Smart File Naming"
              description="Set a prefix and get auto-incremented filenames like 'Storyboard_1', 'Storyboard_2' — organized, predictable, clean."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <FeatureCard
              title="Universal Format Support"
              description="Handles PNG, JPEG, JPG, and converts unsupported formats like WebP and AVIF automatically — no external tools needed."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <FeatureCard
              title="Bin-Aware Importing"
              description="Choose the target bin, and Clipboard It sends the image where it belongs — no dragging required. Stay organized automatically."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10V16M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Pricing</span>
            <h2 className="section-title">Simple & Affordable</h2>
            <p className="section-description">
              One price. No subscriptions. Lifetime updates included.
            </p>
          </div>

          <div className="pricing-card">
            <div style={{
              position: 'absolute',
              top: '30px',
              right: '-8px',
              background: 'var(--secondary)',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              padding: '8px 15px',
              letterSpacing: '0.5px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              borderRadius: '4px 0 0 4px',
            }}>
              <div style={{ textAlign: 'center', marginBottom: '5px' }}>LAUNCH SALE</div>
              <CountdownTimer />
            </div>
            
            <div className="pricing-header">
              <div className="pricing-type">Clipboard It (Forever)</div>
              
              <div style={{ position: 'relative', marginTop: '20px', marginBottom: '15px' }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px',
                  position: 'relative'
                }}>
                  <span style={{ 
                    fontSize: '16px', 
                    color: 'var(--gray-400)',
                    marginRight: '5px'
                  }}>$</span>
                  <span style={{ 
                    fontSize: '28px', 
                    fontWeight: '600', 
                    color: 'var(--gray-400)',
                    position: 'relative'
                  }}>
                    24.99
                    <span style={{
                      position: 'absolute',
                      width: '110%',
                      height: '2px',
                      background: 'var(--gray-400)',
                      left: '-5%',
                      top: '50%',
                      borderRadius: '1px'
                    }}></span>
                  </span>
                </div>
                
                <div className="pricing-price" style={{ display: 'flex', justifyContent: 'center' }}>
                  <span className="pricing-currency" style={{ 
                    alignSelf: 'flex-start',
                    marginTop: '10px',
                    color: 'var(--white)'
                  }}>$</span>
                  <span style={{ 
                    fontSize: '50px', 
                    fontWeight: '700',
                    color: 'var(--white)',
                    lineHeight: '1'
                  }}>19</span>
                  <span style={{ 
                    fontWeight: '700',
                    fontSize: '30px',
                    alignSelf: 'flex-end',
                    marginBottom: '8px',
                    color: 'var(--white)'
                  }}>.99</span>
                </div>
              </div>
              
              <div className="pricing-period" style={{ 
                display: 'inline-block',
                padding: '5px 15px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                fontSize: '14px',
                marginTop: '5px'
              }}>
                One-time payment • Limited offer
              </div>
            </div>
            
            <p className="pricing-description">
              Everything you need to streamline your image workflow in Premiere Pro.
            </p>
            
            <ul className="pricing-features">
              <PricingFeature text="All features included" />
              <PricingFeature text="Lifetime updates" />
              <PricingFeature text="Works with Premiere Pro 2023 and later" />
              <PricingFeature text="Compatible with Mac and Windows" />
              <PricingFeature text="Email support" />
            </ul>
            
            <a 
              href="https://exchange.adobe.com/apps/cc/203487/clipboard-it" 
              className="pricing-button"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--white)',
                transition: 'all 0.3s ease',
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="download">
        <div className="container">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Built by an editor, for editors</h2>
              <p className="cta-description">
                I built Clipboard It because I was tired of breaking my creative flow to
                save, find, and import images. It's small, fast, and just works. Try it out, I think you'll
                love it. - Austin
              </p>
              <a 
                href="https://exchange.adobe.com/apps/cc/203487/clipboard-it" 
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;