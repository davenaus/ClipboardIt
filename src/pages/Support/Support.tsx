import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { supportStyles } from './styles';

const DiscordSupportPage: React.FC = () => {
  const discordInviteLink = "https://discord.gg/zDhzGNVzue";
  const [animate, setAnimate] = useState(false);
  const [memberCount, setMemberCount] = useState('200+');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    let count = 200;
    const countInterval = setInterval(() => {
      count += Math.floor(Math.random() * 10);
      if (count > 250) {
        clearInterval(countInterval);
      } else {
        setMemberCount(`${count.toLocaleString()}+`);
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <>
      <style>{supportStyles}</style>
      
      <section className="hero">
        <div className="container">
          <Header />
        </div>
      </section>

      <section className="support-section discord-support-section">
        <div className="container">
          <div className="support-form" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <img 
              src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png" 
              alt="Discord Logo"
              style={{ 
                width: '200px', 
                height: 'auto', 
                margin: '0 auto 30px',
                display: 'block'
              }}
            />
            <h3 style={{ color: 'var(--white)', marginBottom: '24px', fontSize: '28px' }}>
              Get Instant Support
            </h3>
            <p style={{ color: 'var(--gray-300)', marginBottom: '40px', maxWidth: '550px', margin: '0 auto 40px' }}>
              Our Discord community is the fastest way to get help with any questions or issues you might be experiencing with Clipboard It. Our team and helpful community members are ready to assist you.
            </p>
            <a
              href={discordInviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="discord-button"
            >
              <svg
                className="discord-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3027 4.9471C17.9042 4.3142 16.4118 3.8514 14.8516 3.5857C14.8274 3.5814 14.8031 3.5928 14.7917 3.6157C14.6073 3.9386 14.4043 4.3557 14.2592 4.689C12.5826 4.4419 10.9145 4.4419 9.27618 4.689C9.13109 4.3471 8.92007 3.9386 8.73451 3.6157C8.7231 3.5935 8.69883 3.5821 8.6746 3.5857C7.11525 3.8507 5.62287 4.3135 4.22362 4.9471C4.21392 4.9514 4.20511 4.9585 4.19903 4.9678C1.24505 9.3842 0.435207 13.6935 0.82322 17.9436C0.825026 17.9607 0.834646 17.9771 0.848147 17.9878C2.6987 19.3562 4.49296 20.1879 6.254 20.7685C6.27823 20.7763 6.30338 20.7677 6.31836 20.7471C6.72588 20.197 7.09283 19.6174 7.40957 19.0085C7.4242 18.9793 7.40957 18.9443 7.37916 18.9323C6.76252 18.6905 6.17348 18.3977 5.60827 18.067C5.57433 18.0465 5.57168 17.9985 5.6026 17.975C5.70174 17.9007 5.80087 17.8236 5.89559 17.7458C5.91233 17.7322 5.93481 17.7294 5.95462 17.7386C9.50299 19.372 13.3279 19.372 16.8333 17.7386C16.8531 17.7287 16.8756 17.7315 16.8931 17.7451C16.9878 17.8229 17.0869 17.9007 17.1868 17.975C17.2177 17.9985 17.2158 18.0465 17.1818 18.067C16.6166 18.4034 16.0276 18.6905 15.4102 18.9316C15.3798 18.9436 15.3659 18.9793 15.3806 19.0085C15.7031 19.6167 16.07 20.1963 16.4711 20.7464C16.4853 20.7677 16.5112 20.7763 16.5354 20.7685C18.3043 20.1879 20.0985 19.3562 21.9491 17.9878C21.9634 17.9771 21.9723 17.9614 21.9741 17.9443C22.4381 13.0566 21.1398 8.78607 19.3361 4.9685C19.3308 4.9585 19.3219 4.9514 19.3027 4.9471ZM7.56306 15.2438C6.49288 15.2438 5.60827 14.2463 5.60827 13.0222C5.60827 11.7981 6.47736 10.8006 7.56306 10.8006C8.65699 10.8006 9.5416 11.8059 9.52608 13.0222C9.52608 14.2463 8.64963 15.2438 7.56306 15.2438ZM15.9505 15.2438C14.8803 15.2438 13.9957 14.2463 13.9957 13.0222C13.9957 11.7981 14.8648 10.8006 15.9505 10.8006C17.0444 10.8006 17.929 11.8059 17.9135 13.0222C17.9135 14.2463 17.0444 15.2438 15.9505 15.2438Z"
                  fill="currentColor"
                />
              </svg>
              Join Our Discord
            </a>
            <div style={{ 
              marginTop: '30px', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}>
              <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>
                Available 24/7 with community support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Join Our Discord?</h2>
            <p className="section-description">
              Our Discord server offers benefits to help you get the most out of Clipboard It.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Instant Technical Support</h3>
              <p className="feature-description">
                Get immediate help with technical issues, installation problems, or any other questions you might have about Clipboard It.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Connect with the Community</h3>
              <p className="feature-description">
                Meet other Clipboard It users, share tips and tricks, and learn how others are using the tool to improve their workflow.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Latest Updates & News</h3>
              <p className="feature-description">
                Be the first to know about new features, updates, and announcements for Clipboard It directly from our development team.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Feature Requests & Feedback</h3>
              <p className="feature-description">
                Share your ideas and suggestions directly with the developers. Help shape the future of Clipboard It with your feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DiscordSupportPage;