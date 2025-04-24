import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
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
                <path
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12H4M12 3V4M20 12H21M12 20V21M18.364 5.63604L17.6569 6.34315M5.63604 5.63604L6.34315 6.34315M6.34315 17.6569L5.63604 18.364M17.6569 17.6569L18.364 18.364"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
          />

          <FeatureCard
            title="Smart File Naming"
            description="Set a prefix and get auto-incremented filenames like 'Storyboard_1', 'Storyboard_2' — organized, predictable, clean."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <FeatureCard
            title="Universal Format Support"
            description="Handles PNG, JPEG, JPG, and converts unsupported formats like WebP and AVIF automatically — no external tools needed."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M21 15L16 10L5 21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            }
          />

          <FeatureCard
            title="Bin-Aware Importing"
            description="Choose the target bin, and Clipboard It sends the image where it belongs — no dragging required. Stay organized automatically."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M12 10V16M9 13H15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
