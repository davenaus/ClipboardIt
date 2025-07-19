import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { termsStyles } from './styles';

const TermsPage: React.FC = () => {
  return (
    <>
      <style>{termsStyles}</style>
      
      <section className="hero">
        <div className="container">
          <Header />
          
          <div className="section-header" style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2 className="section-title">Terms and Conditions</h2>
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
                These Terms and Conditions ("Terms") govern your use of Clipboard It ("the Software"), provided by Austin Davenport ("we," "us," or "our"). By purchasing, downloading, installing, or using the Software, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">2. License</h3>
              <p className="page-text">
                Subject to your compliance with these Terms, we grant you a non-exclusive, non-transferable license to download, install, and use the Software for your personal or business purposes.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">3. Restrictions</h3>
              <p className="page-text">You may not:</p>
              <ul className="page-list">
                <li className="page-list-item">Modify, reverse engineer, decompile, or disassemble the Software</li>
                <li className="page-list-item">Create derivative works based on the Software</li>
                <li className="page-list-item">Remove any proprietary notices or labels on the Software</li>
                <li className="page-list-item">Use the Software in any way that violates applicable laws or regulations</li>
                <li className="page-list-item">Redistribute, sell, rent, lease, or sublicense the Software without our written permission</li>
              </ul>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">4. Payment and Refunds</h3>
              <p className="page-text">
                The Software is sold as a one-time purchase. All payments are processed through our payment processor and are subject to their terms of service. Due to the digital nature of the Software, all sales are final and we do not offer refunds except where required by law.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">5. Updates and Support</h3>
              <p className="page-text">
                We may provide updates to the Software at our discretion. These updates may include bug fixes, improvements, or new features. Support for the Software is provided on a best-effort basis through our support channels.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">6. Disclaimer of Warranties</h3>
              <p className="page-text">
                THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">7. Limitation of Liability</h3>
              <p className="page-text">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OR INABILITY TO USE THE SOFTWARE.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">8. Changes to These Terms</h3>
              <p className="page-text">
                We reserve the right to modify or replace these Terms at any time. If we make material changes, we will provide notice on our website or through the Software. Your continued use of the Software after such changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div className="page-section">
              <h3 className="page-section-title">9. Contact Us</h3>
              <p className="page-text">
                If you have any questions about these Terms, please contact us through our <Link to="/support" style={{ color: 'var(--primary)', textDecoration: 'none' }}>support page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsPage;