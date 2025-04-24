import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="cta" id="download">
      <div className="container">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Built by an editor, for editors</h2>
            <p className="cta-description">
              I built Clipboard It because I was tired of breaking my creative flow to
              save, find, and import images. It's small, fast, and just works. Try it out — I think you'll
              love it.
            </p>
            <a 
              href="https://shop.austindavenport.com/" 
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
  );
};

export default CTASection;
