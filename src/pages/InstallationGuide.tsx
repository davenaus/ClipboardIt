import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const InstallationGuide: React.FC = () => {
  const [activeOs, setActiveOs] = useState<'mac' | 'windows'>('mac');
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
                <h3 className="step-title">Purchase and Download Clipboard It</h3>
                <p className="step-description">
                  Purchase Clipboard It from our shop and download the ClipboardIt.zxp file.
                </p>
                <div className="step-action">
                  <a 
                    href="https://shop.austindavenport.com/products/clipboard-it" 
                    className="button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Clipboard It
                  </a>
                </div>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>After completing your purchase, you'll receive a download link for the ClipboardIt.zxp file via email. Save it to a location you can easily find, like your Downloads folder.</p>
                </div>
              </div>
              <div className="step-image">
                <img src="https://64.media.tumblr.com/a5cb165583897ddf2653cb9a44d19385/40735e9f341f0ae0-fe/s1280x1920/86d04f16968c89305e979b440c01bf636db52b17.pnj" alt="Purchase and Download Clipboard It" />
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Download ZXP Installer</h3>
                <p className="step-description">
                  Next, you'll need a ZXP installer. We recommend the free ZXP/UXP Installer from aescripts.
                </p>
                <div className="step-action">
                  <a 
                    href="https://aescripts.com/learn/zxp-installer/" 
                    className="button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download ZXP Installer
                  </a>
                </div>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>The ZXP installer is a small utility that helps install Adobe extensions. It works with all Adobe applications including Premiere Pro.</p>
                </div>
              </div>
              <div className="step-image">
                <img src="https://64.media.tumblr.com/791d423d4aa68df28337869610e893e5/b7c2c7d5247ccaac-80/s1280x1920/cf679dd0270775cc0b2f2a3563fddce2a4427357.pnj" alt="Download ZXP Installer" />
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Install the Extension</h3>
                <p className="step-description">
                  Now it's time to install the Clipboard It extension using the ZXP Installer.
                </p>
                <div className="step-details">
                  <div className="os-tabs">
                    <div 
                      className={`os-tab ${activeOs === 'mac' ? 'active' : ''}`} 
                      onClick={() => setActiveOs('mac')}
                    >
                      Mac OS
                    </div>
                    <div 
                      className={`os-tab ${activeOs === 'windows' ? 'active' : ''}`}
                      onClick={() => setActiveOs('windows')}
                    >
                      Windows
                    </div>
                  </div>
                  
                  <div className={`os-instructions ${activeOs === 'mac' ? '' : 'hidden'}`}>
                    <ol className="instruction-list">
                      <li>Open the ZXP Installer application</li>
                      <li>Drag and drop the ClipboardIt.zxp file onto the ZXP Installer window</li>
                      <li>Click "Install" and wait for the process to complete</li>
                      <li>If prompted, enter your computer password to authorize the installation</li>
                    </ol>
                  </div>
                  
                  <div className={`os-instructions ${activeOs === 'windows' ? '' : 'hidden'}`}>
                    <ol className="instruction-list">
                      <li>Open the ZXP Installer application</li>
                      <li>Click the "Browse" button and locate the ClipboardIt.zxp file</li>
                      <li>Click "Install" and wait for the process to complete</li>
                      <li>If prompted by User Account Control, click "Yes" to authorize the installation</li>
                    </ol>
                  </div>
                </div>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>If you receive a message saying "Extension Successfully Installed," you're good to go!</p>
                </div>
              </div>
              <div className="step-image">
                <img src="https://64.media.tumblr.com/bd053a1d4d803a313f71f158639a2aae/5ee7b2fbb79a9cd5-95/s1280x1920/066b746c267c03f3ff28477d8573963eb5da7787.pnj" alt="Install the Extension" />
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Accessing Clipboard It in Premiere Pro</h3>
                <p className="step-description">
                  Once installed, you can access Clipboard It from within Premiere Pro.
                </p>
                <div className="step-details">
                  <ol className="instruction-list">
                    <li>Open Adobe Premiere Pro</li>
                    <li>Go to Window → Extensions → Clipboard It</li>
                    <li>The Clipboard It panel will appear in your workspace</li>
                    <li>Dock it wherever is most convenient for your workflow</li>
                  </ol>
                </div>
                <div className="step-note">
                  <svg className="note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
                  </svg>
                  <p>You can save your workspace with Clipboard It panel for easy access in future projects!</p>
                </div>
              </div>
              <div className="step-image">
                <img src="https://64.media.tumblr.com/8effe9fb8b07b708772126f054a3294a/dba8e05ccc8e64b9-f7/s1280x1920/e2163c9bcb5595aeb70bf06ce2702d6cbc8e0a8e.pnj" alt="Access Clipboard It in Premiere Pro" />
              </div>
            </div>

            <div className="installation-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Troubleshooting</h3>
                <p className="step-description">
                  If you encounter any issues during installation, try these solutions:
                </p>
                <div className="troubleshooting-accordion">
                  <div className={`accordion-item ${expandedItems.includes(0) ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                      Extension Not Appearing in Premiere Pro
                    </div>
                    <div className="accordion-content">
                      <ol>
                        <li>Close all Adobe applications completely</li>
                        <li>Clear the Adobe CEP cache:
                          <div className="code-block">
                            <pre><code>// Mac OS
~/Library/Caches/CSXS/</code></pre>
                            <pre><code>// Windows
%APPDATA%\Adobe\CSXS\</code></pre>
                          </div>
                        </li>
                        <li>Restart your computer and try again</li>
                      </ol>
                    </div>
                  </div>

                  <div className={`accordion-item ${expandedItems.includes(1) ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                      Installation Failed Error
                    </div>
                    <div className="accordion-content">
                      <ol>
                        <li>Try using the "Custom Install" option in ZXP Installer</li>
                        <li>Ensure your Adobe applications are up to date</li>
                        <li>Check if you have sufficient permissions on your computer</li>
                      </ol>
                    </div>
                  </div>

                  <div className={`accordion-item ${expandedItems.includes(2) ? 'active' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                      Extension Stops Working
                    </div>
                    <div className="accordion-content">
                      <ol>
                        <li>Uninstall the extension using ZXP Installer</li>
                        <li>Reinstall the extension following the steps above</li>
                        <li>If the issue persists, contact our support</li>
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