import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { installationStyles } from './styles';

const InstallationGuide: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  return (
    <>
      <style>{installationStyles}</style>
      
      <section className="hero">
        <div className="container">
          <Header />
          
          <div className="section-header" style={{ textAlign: 'center', marginTop: '40px' }}>
            <span className="section-overline">Getting Started</span>
            <h2 className="section-title">Installation Guide</h2>
            <p className="section-description">
              Follow these simple steps to get Clipboard It up and running in your Premiere Pro.
            </p>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="installation-steps">
            <div className="installation-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Visit Adobe Exchange</h3>
                <p className="step-description">
                  Click the link below to visit Clipboard It on the Adobe Exchange marketplace.
                </p>
                <div className="step-action">
                  <a 
                    href="https://exchange.adobe.com/apps/cc/203487/clipboard-it" 
                    className="button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Adobe Exchange
                  </a>
                </div>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>Adobe Exchange is Adobe's official marketplace for extensions and plugins. It's the safest and most reliable way to install Clipboard It.</p>
                </div>
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Sign In to Adobe</h3>
                <p className="step-description">
                  Sign in to your Adobe account on the Exchange page. If you don't have an Adobe account, you can create one for free.
                </p>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>You'll need to be signed in to purchase and install extensions from Adobe Exchange. This is the same account you use for Adobe Creative Cloud.</p>
                </div>
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Purchase and Install</h3>
                <p className="step-description">
                  Complete your purchase on Adobe Exchange and the extension will automatically install through Creative Cloud.
                </p>
                <div className="step-details">
                  <ol className="instruction-list">
                    <li>Click the "Buy" button on the Adobe Exchange page</li>
                    <li>Complete the checkout process with your payment information</li>
                    <li>Adobe Creative Cloud will automatically download and install Clipboard It</li>
                    <li>You'll receive a confirmation email when installation is complete</li>
                  </ol>
                </div>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>No manual installation required! Adobe Exchange handles everything automatically through Creative Cloud.</p>
                </div>
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Launch Premiere Pro and Start Using Clipboard It</h3>
                <p className="step-description">
                  Relaunch Premiere Pro to access the newly installed Clipboard It extension.
                </p>
                <div className="step-details">
                  <ol className="instruction-list">
                    <li>Restart Adobe Premiere Pro (if it was already open)</li>
                    <li>Go to Window → Extensions → Clipboard It</li>
                    <li>The Clipboard It panel will appear in your workspace</li>
                    <li>Dock it wherever is most convenient for your workflow</li>
                    <li>Start copying and pasting images directly into your bins!</li>
                  </ol>
                </div>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>That's it! Adobe Exchange makes installation incredibly simple compared to manual methods.</p>
                </div>
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Troubleshooting</h3>
                <p className="step-description">
                  If you encounter any issues, try these solutions:
                </p>
                <div className="troubleshooting-accordion">
                  <div className={`accordion-item ${expandedItems.includes(0) ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                      Extension Not Appearing in Premiere Pro
                    </div>
                    <div className="accordion-content">
                      <ol>
                        <li>Make sure you're signed in to the same Adobe account in both Creative Cloud and Premiere Pro</li>
                        <li>Restart Adobe Premiere Pro completely</li>
                        <li>Check that your Creative Cloud app shows Clipboard It as installed</li>
                        <li>If still not appearing, sign out and back into Creative Cloud</li>
                      </ol>
                    </div>
                  </div>

                  <div className={`accordion-item ${expandedItems.includes(1) ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                      Purchase Issues on Adobe Exchange
                    </div>
                    <div className="accordion-content">
                      <ol>
                        <li>Ensure you're signed in to your Adobe account</li>
                        <li>Check that your payment method is valid and up to date</li>
                        <li>Try using a different browser or clearing your browser cache</li>
                        <li>Contact Adobe Support if payment issues persist</li>
                      </ol>
                    </div>
                  </div>

                  <div className={`accordion-item ${expandedItems.includes(2) ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                      Extension Stops Working
                    </div>
                    <div className="accordion-content">
                      <ol>
                        <li>Check that Creative Cloud is running and you're signed in</li>
                        <li>Restart Premiere Pro</li>
                        <li>Try disabling and re-enabling the extension in Window → Extensions</li>
                        <li>If issues persist, contact our support team</li>
                      </ol>
                    </div>
                  </div>

                  <div className={`accordion-item ${expandedItems.includes(3) ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(3)}>
                      Can't Find Clipboard It in Extensions Menu
                    </div>
                    <div className="accordion-content">
                      <ol>
                        <li>Make sure Premiere Pro is fully updated to the latest version</li>
                        <li>Check that the extension installed successfully in Creative Cloud</li>
                        <li>Look in Window → Extensions → Clipboard It (not Window → Workspaces)</li>
                        <li>Try refreshing the extensions list by restarting Premiere Pro</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="installation-cta">
              <h3>Need More Help?</h3>
              <p>If you're still having trouble installing Clipboard It, our support team is ready to assist.</p>
              <Link to="/support" className="button-primary">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InstallationGuide;