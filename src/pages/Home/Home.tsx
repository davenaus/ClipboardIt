import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderWithAnnouncement from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CouponModal from '../../components/modals/CouponModal';
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
  const [showCouponModal, setShowCouponModal] = useState(false);

  const openCouponModal = () => setShowCouponModal(true);
  const closeCouponModal = () => setShowCouponModal(false);

  return (
    <>
      <Helmet>
        <title>Clipboard It - Copy & Paste For Premiere Pro | Speed Up Your Video Editing</title>
        <meta name="description" content="Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste. Transform your video editing workflow and save hours every week." />
        <meta name="keywords" content="premiere pro, copy paste, video editing, workflow, clipboard, image import, adobe premiere, editing efficiency, productivity" />
        <link rel="canonical" href="https://clipboard.it/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Clipboard It - Copy & Paste For Premiere Pro" />
        <meta property="og:description" content="Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste. Transform your video editing workflow." />
        <meta property="og:url" content="https://clipboard.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://64.media.tumblr.com/ba6522f16f9698f1082d11a56ec8c6cb/07b1fb0c66656959-da/s1280x1920/a200e78a66cec7d597c35fdd9d0d2ec1cc250d1d.pnj" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clipboard It - Copy & Paste For Premiere Pro" />
        <meta name="twitter:description" content="Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste." />
        <meta name="twitter:image" content="https://64.media.tumblr.com/ba6522f16f9698f1082d11a56ec8c6cb/07b1fb0c66656959-da/s1280x1920/a200e78a66cec7d597c35fdd9d0d2ec1cc250d1d.pnj" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Clipboard It",
            "description": "Adobe Premiere Pro extension for copying and pasting images directly into your video editing workflow",
            "url": "https://clipboard.it",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": ["Windows", "macOS"],
            "softwareVersion": "1.0",
            "offers": {
              "@type": "Offer",
              "price": "19.99",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock"
            },
            "author": {
              "@type": "Person",
              "name": "Austin Davenport"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Clipboard It"
            },
            "screenshot": "https://64.media.tumblr.com/ba6522f16f9698f1082d11a56ec8c6cb/07b1fb0c66656959-da/s1280x1920/a200e78a66cec7d597c35fdd9d0d2ec1cc250d1d.pnj"
          })}
        </script>
      </Helmet>
      
      <style>{homeStyles}</style>
      <CouponModal isOpen={showCouponModal} onClose={closeCouponModal} />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <HeaderWithAnnouncement onDownloadClick={openCouponModal} />

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

      {/* Old Way vs New Way Section */}
      <section className="old-vs-new" id="workflow-comparison">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">The Problem</span>
            <h2 className="section-title">Why Editors Need Clipboard It</h2>
            <p className="section-description">
              See how Clipboard It transforms the tedious process of getting images into Premiere Pro.
            </p>
          </div>

          <div className="workflow-comparison">
            <div className="workflow-column old-way">
              <div className="workflow-header">
                <div className="workflow-icon old-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="workflow-title">The Old Way</h3>
                <p className="workflow-subtitle">Frustrating & Time-Consuming</p>
              </div>
              
              <div className="scenario-box">
                <p className="scenario-text">"Editor Joe needs 5 red car photos."</p>
              </div>
              
              <div className="workflow-steps-list">
                <div className="workflow-step-item">
                  <span className="step-bullet">1</span>
                  <span>Joe goes to Google Images</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">2</span>
                  <span>He finds 10 suitable pictures</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">3</span>
                  <span>He must <strong>right-click + save</strong> each one individually</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">4</span>
                  <span>Files downloaded in AVIF or WebP format need conversion to PNG</span>
                </div>
                             <div className="workflow-step-item">
                  <span className="step-bullet">5</span>
                  <span>Joe renames each image for organization</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">6</span>
                  <span>Joe creates a bin inside Premiere Pro named "Red Car"</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">7</span>
                  <span>Joe then <strong>right-clicks &gt; Import</strong>, locates the images</span>
                </div>
   
                <div className="workflow-step-item pain-point">
                  <span className="step-bullet">💀</span>
                  <span>If he wants more images, he repeats the whole process</span>
                </div>
              </div>
              
              <div className="time-indicator old-time">
                <span>⏱️ 8-10 minutes per batch</span>
              </div>
            </div>

            <div className="vs-divider">
              <span>VS</span>
            </div>

            <div className="workflow-column new-way">
              <div className="workflow-header">
                <div className="workflow-icon new-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="workflow-title">The Clipboard It Way</h3>
                <p className="workflow-subtitle">Fast & Effortless</p>
              </div>
              
              <div className="scenario-box">
                <p className="scenario-text">"Editor Joe uses Clipboard It."</p>
              </div>
              
              <div className="workflow-steps-list">
                <div className="workflow-step-item">
                  <span className="step-bullet">1</span>
                  <span>Joe sets the destination <strong>folder and bin name</strong> in the plug-in</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">2</span>
                  <span>Joe searches Google for images and <strong>right-clicks &gt; Copy Image</strong></span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">3</span>
                  <span>He <strong>opens Clipboard It</strong> and pastes</span>
                </div>
                <div className="workflow-step-item win-point">
                  <span className="step-bullet">🎉</span>
                  <span>Clipboard It converts the image to PNG automatically, saving transparency</span>
                </div>
                <div className="workflow-step-item win-point">
                  <span className="step-bullet">🎉</span>
                  <span>Renames it with the desired prefix automatically</span>
                </div>
                <div className="workflow-step-item win-point">
                  <span className="step-bullet">🎉</span>
                  <span>Imports directly into the correct Premiere bin automatically</span>
                </div>
                <div className="workflow-step-item win-point">
                  <span className="step-bullet">🎉</span>
                  <span>Supports <strong>drag-and-drop</strong> from screenshots too</span>
                </div>
                <div className="workflow-step-item win-point">
                  <span className="step-bullet">🎉</span>
                  <span>No need for conversions, renaming, Finder, or repetitive imports</span>
                </div>
              </div>
              
              <div className="time-indicator new-time">
                <span>⚡ 30 seconds per batch</span>
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

          <div className="pricing-card-wrapper">
            <div className="pricing-card">
              <div className="pricing-badge">
                <span className="badge-text">🎉 Launch Sale</span>
                <div className="countdown-mini">
                  <CountdownTimer />
                </div>
              </div>
              
              <div className="pricing-header">
                <div className="product-title">Clipboard It</div>
                <div className="product-subtitle">Forever License</div>
                
                <div className="price-container">
                  <div className="old-price">
                    <span className="currency">$</span>
                    <span className="amount">24.99</span>
                  </div>
                  
                  <div className="current-price">
                    <span className="currency">$</span>
                    <span className="main-amount">19</span>
                    <span className="cents">.99</span>
                  </div>
                  
                  <div className="discount-badge">20% OFF</div>
                </div>
                
                <div className="payment-info">
                  <span>One-time payment • No subscriptions</span>
                </div>
              </div>
              
              <div className="features-section">
                <h4 className="features-title">What's included:</h4>
                <ul className="pricing-features">
                  <PricingFeature text="Complete Clipboard It extension" />
                  <PricingFeature text="Lifetime updates & improvements" />
                  <PricingFeature text="Works with Premiere Pro 2023+" />
                  <PricingFeature text="Mac & Windows compatible" />
                  <PricingFeature text="Priority email support" />
                </ul>
              </div>
              
              <div className="cta-section">
                <button 
                  onClick={openCouponModal}
                  className="pricing-cta-button"
                >
                  <span className="button-text">Get Clipboard It Now</span>
                  <span className="button-subtext">Instant download</span>
                </button>
                
                <div className="guarantee">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                  <span>Securely buy and download through Adobe Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="download">
        <div className="container">
          <div className="cta-container">
            <div className="cta-visual">
              <div className="cta-avatar">
                <div className="avatar-image">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="avatar-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="editor-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Editing</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Hours Saved</div>
                </div>
              </div>
            </div>
            
            <div className="cta-content">
              <div className="cta-header">
                <h2 className="cta-title">Built by an editor, for editors</h2>
                <div className="author-signature">
                  <span className="signature-text">- Austin Davenport</span>
                  <div className="signature-line"></div>
                </div>
              </div>
              
              <div className="cta-story">
                <p className="story-text">
                  I built Clipboard It because I was tired of breaking my creative flow to save, find, and import images. 
                  It's small, fast, and just works.
                </p>
                <p className="story-emphasis">
                  Try it out, I think you'll love it.
                </p>
              </div>
              
              <div className="cta-actions">
                <button 
                  onClick={openCouponModal}
                  className="cta-primary-button"
                >
                  <span className="button-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="button-text">Download Clipboard It</span>
                </button>
                
                <div className="trust-indicators">
                  <div className="trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22S2 16 2 10C2 5.58172 5.58172 2 10 2C10.9544 2 11.8625 2.18131 12.7001 2.51165C13.5377 2.18131 14.4456 2 15.4 2C19.8183 2 23.4 5.58172 23.4 10C23.4 16 13.4 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Trusted by 100+ editors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;