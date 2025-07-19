export const supportStyles = `
.hero {
  background: linear-gradient(to bottom, rgba(104, 83, 255, 0.2) 0%, rgba(18, 18, 18, 0) 100%);
  padding: 40px 0 40px;
  position: relative;
  overflow: hidden;
}

.discord-support-section {
  position: relative;
  overflow: hidden;
  background-color: var(--dark);
  margin-bottom: 90px;
}

.discord-support-section::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(104, 83, 255, 0.2) 0%, rgba(18, 18, 18, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.discord-support-section::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 110, 127, 0.2) 0%, rgba(18, 18, 18, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.support-form {
  max-width: 600px;
  margin: 0 auto;
  background: var(--dark-surface);
  border-radius: 12px;
  border: 1px solid var(--gray-800);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.discord-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: var(--white);
  padding: 16px 36px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(104, 83, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.discord-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease;
}

.discord-button:hover {
  background: var(--primary-light);
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(104, 83, 255, 0.4);
}

.discord-button:hover::before {
  left: 100%;
}

.discord-button:active {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(104, 83, 255, 0.3);
}

.discord-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  border-radius: 8px;
  opacity: 0;
  z-index: -1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.05);
    opacity: 0;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}

.discord-icon {
  margin-right: 12px;
  transition: transform 0.3s ease;
}

.discord-button:hover .discord-icon {
  transform: scale(1.1);
}

.features {
  padding: var(--section-spacing) 0;
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}

.feature-card {
  background: var(--dark-surface);
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--gray-800);
}

.feature-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: var(--primary);
  transition: height 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  border-color: var(--gray-700);
}

.feature-card:hover::after {
  height: 100%;
}

.feature-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: var(--dark-surface-2);
  border: 1px solid var(--gray-800);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  border-color: var(--primary);
}

.feature-icon svg {
  width: 28px;
  height: 28px;
  color: var(--primary);
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 8px;
}

.feature-description {
  font-size: 16px;
  color: var(--gray-400);
  line-height: 1.6;
  flex-grow: 1;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 20px 0 60px;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  .hero-content h1 {
    font-size: 40px;
  }

  .hero-content p {
    font-size: 18px;
    margin: 0 auto 30px;
  }

  .author-pill {
    margin: 0 auto;
  }

  .hero-image {
    justify-self: center;
    max-width: 80%;
    margin: 0 auto;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .workflow-steps {
    grid-template-columns: 1fr;
  }

  .workflow-steps::after {
    display: none;
  }

  .cta-container {
    padding: 40px 20px;
  }

  .cta-title {
    font-size: 28px;
  }

  .how-it-works {
    padding: 15px 0;
  }
}

/* Hide launch sale callout on mobile */
@media screen and (max-width: 768px) {
  .pricing-card > div[style*="position: absolute"][style*="background: var(--secondary)"] {
    display: none !important;
  }
  
  div[style*="background: linear-gradient(to right, var(--primary), var(--secondary))"] {
    display: none !important;
  }
}
`;