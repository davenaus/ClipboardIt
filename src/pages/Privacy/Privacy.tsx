import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { privacyStyles } from './styles';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <style>{privacyStyles}</style>
      
      <section className="hero">
        <div className="container">
          <Header />
          
          <div className="section-header" style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2 className="section-title">Privacy Policy</h2>
            <p className="section-description">
              Last updated: April 23, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="page-container">
            <div className="page-section">
              <h3 className="page-section-title">1. Introduction</h3>
              <p className="page-text">
                This Privacy Policy explains how Austin Davenport ("we," "us," or "our") collects, uses, and shares your information when you use our Clipboard It software ("the Software"). We respect your privacy and are committed to protecting your personal data.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">2. Information We Collect</h3>
              <p className="page-text">
                We collect minimal information to provide and improve the Software:
              </p>
              <ul className="page-list">
                <li className="page-list-item">
                  <strong>Personal Information:</strong> Email address (for purchase confirmation and support)
                </li>
                <li className="page-list-item">
                  <strong>Usage Data:</strong> Anonymous usage statistics to help us understand how the Software is being used and to improve its functionality
                </li>
                <li className="page-list-item">
                  <strong>Error Reports:</strong> Automated error reports when the Software encounters problems
                </li>
              </ul>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">3. How We Use Your Information</h3>
              <p className="page-text">
                We use your information for the following purposes:
              </p>
              <ul className="page-list">
                <li className="page-list-item">To provide and maintain the Software</li>
                <li className="page-list-item">To notify you about changes to the Software</li>
                <li className="page-list-item">To provide customer support</li>
                <li className="page-list-item">To gather analysis or valuable information so that we can improve the Software</li>
                <li className="page-list-item">To detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">4. Data Security</h3>
              <p className="page-text">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">5. Third-Party Services</h3>
              <p className="page-text">
                The Software may use third-party services that collect information used to identify you. These third parties have their own privacy policies addressing how they use such information.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">6. Your Data Rights</h3>
              <p className="page-text">
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="page-list">
                <li className="page-list-item">The right to access the personal data we hold about you</li>
                <li className="page-list-item">The right to request correction of your personal data</li>
                <li className="page-list-item">The right to request that we delete your personal data</li>
                <li className="page-list-item">The right to restrict processing of your personal data</li>
                <li className="page-list-item">The right to data portability</li>
              </ul>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">7. Children's Privacy</h3>
              <p className="page-text">
                The Software is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to remove that information.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">8. Changes to This Privacy Policy</h3>
              <p className="page-text">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">9. Contact Us</h3>
              <p className="page-text">
                If you have any questions about this Privacy Policy, please contact us through our <Link to="/support" style={{ color: 'var(--primary)', textDecoration: 'none' }}>support page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPage;