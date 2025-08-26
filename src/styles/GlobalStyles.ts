export const GlobalStyles = `
:root {
  --primary: #6853FF;
  --primary-light: #8A79FF;
  --secondary: #FF6E7F;
  --accent: #FF9676;
  --dark: #121212;
  --dark-surface: #1E1E1E;
  --dark-surface-2: #2A2A2A;
  --gray-800: #333333;
  --gray-700: #444444;
  --gray-600: #666666;
  --gray-400: #999999;
  --gray-300: #BBBBBB;
  --gray-200: #DDDDDD;
  --white: #FFFFFF;
  --section-spacing: 50px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--gray-300);
  background-color: var(--dark);
  overflow-x: hidden;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

img {
  max-width: 100%;
  border-radius: 8px;
}

.button-primary {
  background: var(--primary);
  color: var(--white);
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 15px rgba(104, 83, 255, 0.3);
}

.button-primary:hover {
  background: var(--primary-light);
  transform: translateY(-3px);
}

.section-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 1;
}

.section-overline {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary-light);
  margin-bottom: 16px;
  display: inline-block;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--white);
}

.section-description {
  font-size: 18px;
  font-weight: 400;
  color: var(--gray-400);
  line-height: 1.6;
}

.page-content {
  padding: var(--section-spacing) 0;
  background-color: var(--dark);
}

.page-container {
  max-width: 800px;
  margin: 0 auto;
  background: var(--dark-surface);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid var(--gray-800);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.page-section {
  margin-bottom: 32px;
}

.page-section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 16px;
}

.page-text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-300);
  margin-bottom: 16px;
}

.page-list {
  margin-left: 20px;
  margin-bottom: 16px;
}

.page-list-item {
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-300);
  margin-bottom: 8px;
}

.youtube-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
}

.youtube-modal-container {
  position: relative;
  width: 80%;
  max-width: 900px;
  animation: scaleIn 0.3s ease;
}

.youtube-modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  z-index: 1001;
  padding: 8px;
  border-radius: 50%;
}

.youtube-modal-close:hover {
  transform: rotate(90deg);
  background-color: rgba(255, 255, 255, 0.1);
}

.youtube-modal-content {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--gray-800);
}

.youtube-modal-content iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Navigation Styles */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: none;
}

.logo-image {
  max-width: 190px;
  height: auto;
  margin-right: 0;
  transition: transform 0.3s ease;
}

.logo:hover .logo-image {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a, .nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--gray-300);
  text-decoration: none;
  transition: all 0.4s ease;
  cursor: pointer;
}

.nav-links a:hover, .nav-link:hover {
  color: var(--white);
}

.cta-button {
  background: var(--primary);
  color: var(--white) !important;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.cta-button:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
}

.cta-button:hover::before {
  left: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--white);
  transition: all 0.3s ease;
}

/* Footer Styles */
footer {
  background: var(--dark-surface);
  color: var(--gray-300);
  padding: 80px 0 40px;
  position: relative;
  border-top: 1px solid var(--gray-800);
}

.footer-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.footer-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.footer-logo-image {
  max-width: 180px;
  height: auto;
}

.footer-logo:hover .footer-logo-image {
  transform: scale(1.02);
}

.footer-description {
  color: var(--gray-400);
  font-size: 14px;
  margin-bottom: 32px;
  line-height: 1.6;
}

.footer-creator {
  color: var(--gray-400);
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.6;
}

.footer-creator a {
  color: var(--primary-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-creator a:hover {
  color: var(--white);
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-300);
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  background: var(--primary);
  color: var(--white);
}

.footer-heading {
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.footer-heading:hover::after {
  width: 100%;
}

.footer-links {
  list-style: none;
}

.footer-link {
  margin-bottom: 12px;
}

.footer-link a {
  color: var(--gray-400);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.footer-link a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.footer-link a:hover {
  color: var(--white);
  transform: translateX(3px);
}

.footer-link a:hover::after {
  width: 100%;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--gray-800);
  position: relative;
  z-index: 1;
}

.copyright {
  color: var(--gray-600);
  font-size: 14px;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.legal-link {
  color: var(--gray-600);
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.legal-link:hover {
  color: var(--gray-300);
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .youtube-modal-container {
    width: 95%;
  }
  
  .page-container {
    padding: 30px 20px;
  }

  .nav {
    margin-bottom: 50px;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: var(--dark-surface);
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 100;
    gap: 20px;
    border-top: 1px solid var(--gray-800);
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .logo-image {
    max-width: 120px;
  }

  .footer-logo-image {
    max-width: 140px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
`;