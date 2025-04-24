import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div>
            <Link to="/" className="footer-logo">
              <img 
                src="https://64.media.tumblr.com/b52566e7c7ae10740f53dd219422abc8/932095f6b0e76ae6-bc/s2048x3072/70563b3b63d600e8091f2394f007b794944788e3.pnj"
                alt="Clipboard It Logo" 
                className="footer-logo-image" 
              />
            </Link>
            <p className="footer-description">
              A simple Premiere Pro extension that lets you paste images straight
              into your bins. No saving. No dragging. Just done.
            </p>
            <p className="footer-creator">
              Made with ♥ by{' '}
              <a
                href="https://www.youtube.com/channel/UCg_JArLpHeN9P34qMd9W5rQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Austin Davenport
              </a>
            </p>
            <div className="social-links">
              <a
                href="https://x.com/MrDavenportable"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter (X)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCg_JArLpHeN9P34qMd9W5rQ"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li className="footer-link"><a href="/#features">Features</a></li>
              <li className="footer-link"><a href="/#how-it-works">How It Works</a></li>
              <li className="footer-link"><a href="/#pricing">Pricing</a></li>
              <li className="footer-link">
                <a 
                  href="https://shop.austindavenport.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/support">Support</Link></li>
              <li className="footer-link"><Link to="/installation">Installation Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Austin Davenport. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/terms" className="legal-link">Terms & Conditions</Link>
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;