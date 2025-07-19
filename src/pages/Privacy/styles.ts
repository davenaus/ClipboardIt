export const privacyStyles = `
.hero {
  background: linear-gradient(to bottom, rgba(104, 83, 255, 0.2) 0%, rgba(18, 18, 18, 0) 100%);
  padding: 40px 0 40px;
  position: relative;
  overflow: hidden;
}

/* Privacy page specific styles if needed */
/* Most styles will come from GlobalStyles.ts */

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