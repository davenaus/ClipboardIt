import React, { useState } from 'react';
import Header from '../layout/Header';

// YouTube Modal Component
const YouTubeModal: React.FC<{
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ videoId, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="youtube-modal-overlay" onClick={onClose}>
      <div className="youtube-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="youtube-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="youtube-modal-content">
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  // YouTube video ID - replace with your actual video ID
  const youtubeVideoId = "TMvD8sElvRE";

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="hero">
      <div className="container">
        <Header />

        <div className="hero-container">
          <div className="hero-content">
            <h1>Copy and Paste <span>For Premiere Pro.</span></h1>
            <p>Paste images straight into Premiere Pro. No saving files. No importing. Just copy and paste.</p>
            <a 
              onClick={openModal}
              className="author-pill" 
            >
              <div className="author-avatar"></div>
              <span>Watch The Demo</span>
            </a>
          </div>
          <div className="hero-image">
            <video autoPlay muted loop playsInline className="hero-video">
              <source src="https://i.imgur.com/6sKufFH.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      <YouTubeModal 
        videoId={youtubeVideoId}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default HeroSection;