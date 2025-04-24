import React from 'react';
import Header from '../layout/Header';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <Header />

        <div className="hero-container">
          <div className="hero-content">
            <h1>Copy and Paste <span>For Premiere Pro.</span></h1>
            <p>Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste.</p>
            <a 
              href="https://www.youtube.com/channel/UCg_JArLpHeN9P34qMd9W5rQ" 
              className="author-pill" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="author-avatar"></div>
              <span>by Austin Davenport</span>
            </a>
          </div>
          <div className="hero-image">
            <video autoPlay muted loop playsInline className="hero-video">
              <source src="/ClipboardItDemo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
