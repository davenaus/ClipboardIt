import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { homeStyles } from './styles';
import { absoluteUrl, CLIPBOARD_ADOBE_URL, DEFAULT_OG_IMAGE } from '../../utils/site';

import { createHomeSchema, homeSeo } from '../../utils/searchMetadata';

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

const HomePage: React.FC = () => {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => setIsHydrated(true), []);

  const playDemo = async () => {
    if (!videoRef.current) return;
    setVideoError(false);
    setVideoLoading(true);
    try {
      if (videoError) videoRef.current.load();
      await videoRef.current.play();
    } catch {
      setVideoStarted(false);
      setVideoError(true);
    } finally {
      setVideoLoading(false);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        scroller.scrollTo(elementId, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100);
    }
  }, [location]);


  return (
    <>
      <Helmet>
        <title>{homeSeo.title}</title>
        <meta name="description" content={homeSeo.description} />
        <meta name="keywords" content="premiere pro, copy paste, video editing, workflow, clipboard, image import, adobe premiere, editing efficiency, productivity" />
        <link rel="canonical" href={absoluteUrl('/')} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Clipboard It | Paste Images into Premiere Pro Bins" />
        <meta property="og:description" content={homeSeo.description} />
        <meta property="og:url" content={absoluteUrl('/')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clipboard It | Paste Images into Premiere Pro Bins" />
        <meta name="twitter:description" content={homeSeo.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(createHomeSchema())}
        </script>
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: homeStyles }} />

      <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <Header />

          <div className="hero-container">
            <div className="hero-content">
              <h1>Paste images into <span>Premiere Pro bins.</span></h1>
              <p>Copy an image, click Paste. It's saved, named, and in your bin.</p>
              <div className="hero-actions">
                <a href={CLIPBOARD_ADOBE_URL} target="_blank" rel="noopener noreferrer" className="cta-button" data-track-placement="hero">Get Clipboard It — $24.99</a>
              </div>
              <p className="hero-purchase-note">One-time purchase · Mac &amp; Windows</p>
            </div>
            <div className="hero-image">
              <div className="hero-demo">
                <video
                  ref={videoRef}
                  controls={!isHydrated || videoStarted}
                  playsInline
                  preload="none"
                  width={854}
                  height={480}
                  poster="/clipboard-it-demo-poster.jpg"
                  aria-label="Clipboard It image import demonstration"
                  className="hero-video"
                  onPlaying={() => { setVideoStarted(true); setVideoLoading(false); }}
                  onError={() => { setVideoStarted(false); setVideoError(true); setVideoLoading(false); }}
                >
                  <source src="/clipboard-it-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag. <a href="/clipboard-it-demo.mp4">Watch the demo.</a>
                </video>
                {isHydrated && !videoStarted && (
                  <button type="button" className="hero-demo-play" aria-label="Play Clipboard It demo" disabled={videoLoading} aria-busy={videoLoading} onClick={playDemo}>
                    <span className="hero-demo-play-icon" aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M6 4.5v15L18 12z" /></svg>
                    </span>
                    <span className="hero-demo-play-label">{videoLoading ? 'Loading video…' : 'Watch the demo'}</span>
                  </button>
                )}
              </div>
              {videoError && <p className="hero-demo-error" role="status">The video could not start. Try again or <a href="/clipboard-it-demo.mp4" target="_blank" rel="noopener noreferrer">open the demo</a>.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
        <div className="container">
          <div className="section-header how-it-works-header">
            <span className="section-overline">How it works</span>
            <h2 className="section-title" id="how-it-works-title">Set up once. Then just paste.</h2>
          </div>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Set Your Folder & Bin Once</h3>
              <p className="step-description">Pick them in the panel. Clipboard It remembers.</p>
              <div className="step-image-container">
                <img src="/images/steps/step-1.webp" alt="Clipboard It panel with destination folder and bin name fields" width={720} height={685} loading="lazy" decoding="async" className="step-image" />
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Copy an Image</h3>
              <p className="step-description">Right-click › Copy Image, or grab a screenshot.</p>
              <div className="step-image-container">
                <img src="/images/steps/step-2.webp" alt="Browser right-click menu with the copy option highlighted" width={720} height={582} loading="lazy" decoding="async" className="step-image" />
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Click Paste</h3>
              <p className="step-description">It's saved, named, and imported into your bin.</p>
              <div className="step-image-container">
                <img src="/images/steps/step-3.webp" alt="Clipboard It Paste button" width={720} height={299} loading="lazy" decoding="async" className="step-image" />
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
            <h2 className="section-title">Five images. Two ways.</h2>
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
                <p className="workflow-subtitle">For every single image</p>
              </div>
              
              <div className="scenario-box">
                <p className="scenario-text">"Joe needs 5 red car photos."</p>
              </div>
              
              <div className="workflow-steps-list">
                <div className="workflow-step-item">
                  <span className="step-bullet">1</span>
                  <span><strong>Right-click › Save Image As</strong></span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">2</span>
                  <span>Convert it if Premiere can't read the format</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">3</span>
                  <span>Rename it</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">4</span>
                  <span><strong>File › Import</strong>, then find the file</span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">5</span>
                  <span>Drag it into the right bin</span>
                </div>
                <div className="workflow-step-item pain-point">
                  <span className="step-bullet">💀</span>
                  <span>Repeat for all 5 images</span>
                </div>
              </div>

              <div className="time-indicator old-time">
                <span>25 steps for 5 images</span>
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
                <p className="workflow-subtitle">Folder and bin set once</p>
              </div>
              
              <div className="scenario-box">
                <p className="scenario-text">"Joe uses Clipboard It."</p>
              </div>
              
              <div className="workflow-steps-list">
                <div className="workflow-step-item">
                  <span className="step-bullet">1</span>
                  <span><strong>Right-click › Copy Image</strong></span>
                </div>
                <div className="workflow-step-item">
                  <span className="step-bullet">2</span>
                  <span>Click <strong>Paste</strong></span>
                </div>
                <div className="workflow-step-item win-point">
                  <span className="step-bullet">🎉</span>
                  <span>Saved to your folder, named, and in your bin</span>
                </div>
                <div className="workflow-step-item win-point">
                  <span className="step-bullet">🎉</span>
                  <span>Drag-and-drop screenshots work too</span>
                </div>
              </div>

              <div className="time-indicator new-time">
                <span>10 steps for 5 images</span>
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
            <p className="section-description">A small Premiere Pro panel that does one job well.</p>
          </div>

          <div className="features-grid">
            <FeatureCard
              title="Instant Clipboard Pasting"
              description="Paste any copied image straight into your chosen bin. The file is saved for you."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12H4M12 3V4M20 12H21M12 20V21M18.364 5.63604L17.6569 6.34315M5.63604 5.63604L6.34315 6.34315M6.34315 17.6569L5.63604 18.364M17.6569 17.6569L18.364 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
            />

            <FeatureCard
              title="Smart File Naming"
              description="Set a prefix once. Get Storyboard_1, Storyboard_2, and so on."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <FeatureCard
              title="Copy or Drag and Drop"
              description="Paste copied images or drop in image files. Formats depend on your OS and source app."
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
              description="Every image lands in the bin you picked, ready for the timeline."
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

      <section className="image-workflow" aria-labelledby="image-workflow-details">
        <div className="container image-workflow-layout">
        <h2 id="image-workflow-details">Your files, your folder, your bins</h2>
        <div className="image-workflow-copy">
        <p>Every pasted image is a real file in the folder you chose, so it moves with your project. Switching projects? Point Clipboard It at the new folder and bin.</p>
        <p>Formats and transparency depend on the source app and your OS. Check Adobe Exchange for supported Premiere versions.</p>
        <p><a href="/blog/why-you-cant-copy-paste-images-premiere-pro">Read the image-pasting guide</a> or <a href="/installation">view installation help</a>.</p>
        </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Pricing</span>
            <h2 className="section-title">Simple & Affordable</h2>
            <p className="section-description">Pay once. Use it on every project.</p>
          </div>

          <div className="pricing-card-wrapper">
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="product-title">Clipboard It</div>
                <div className="product-subtitle">For Premiere Pro</div>
                
                <div className="price-container">
                  <div className="current-price">
                    <span className="currency">$</span>
                    <span className="main-amount">24</span>
                    <span className="cents">.99</span>
                  </div>
                </div>
                
                <div className="payment-info">
                  <span>One-time payment · No subscription</span>
                </div>
              </div>
              
              <div className="features-section">
                <h4 className="features-title">What's included:</h4>
                <ul className="pricing-features">
                  <PricingFeature text="Clipboard It panel for Premiere Pro" />
                  <PricingFeature text="Automatic saving, naming, and bin import" />
                  <PricingFeature text="Mac & Windows" />
                  <PricingFeature text="Install help and support" />
                </ul>
              </div>
              
              <div className="cta-section">
                <a
                  href={CLIPBOARD_ADOBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-cta-button"
                >
                  <span className="button-text">Get Clipboard It — $24.99</span>
                  <span className="button-subtext">Buy on Adobe Exchange</span>
                </a>
                
                <div className="guarantee">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                  <span>Check supported Premiere versions on Adobe Exchange</span>
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
                  I built Clipboard It because saving, finding, and importing images kept breaking my flow. It's small, fast, and it just works.
                </p>
                <p className="story-emphasis">
                  Try it out, I think you'll love it.
                </p>
              </div>
              
              <div className="cta-actions">
                <a
                  href={CLIPBOARD_ADOBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary-button"
                >
                  <span className="button-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="button-text">Get Clipboard It — $24.99</span>
                </a>
                
                <div className="trust-indicators">
                  <div className="trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22S2 16 2 10C2 5.58172 5.58172 2 10 2C10.9544 2 11.8625 2.18131 12.7001 2.51165C13.5377 2.18131 14.4456 2 15.4 2C19.8183 2 23.4 5.58172 23.4 10C23.4 16 13.4 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>One-time purchase · Mac &amp; Windows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
};

export default HomePage;
