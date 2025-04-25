import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Workflow</span>
          <h2 className="section-title">Make Editing Simpler</h2>
          <p className="section-description">No more "Save Image As..."</p>
        </div>

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
  );
};

export default HowItWorksSection;
