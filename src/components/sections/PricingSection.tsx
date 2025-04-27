import React, { useState, useEffect } from 'react';

interface PricingFeatureProps {
  text: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ text }) => {
  return (
    <li className="pricing-feature">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
          fill="currentColor"
        />
      </svg>
      <span>{text}</span>
    </li>
  );
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date('July 1, 2025').getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '8px',
      marginBottom: '3px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.days}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>days</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>hrs</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>min</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span style={{ fontSize: '12px', opacity: 0.8, display: 'block' }}>sec</span>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Pricing</span>
          <h2 className="section-title">Simple & Affordable</h2>
          <p className="section-description">
            One price. No subscriptions. Lifetime updates included.
          </p>
        </div>

        <div className="pricing-card">
          {/* Launch Sale tag with countdown timer */}
          <div style={{
            position: 'absolute',
            top: '30px',
            right: '-8px',
            background: 'var(--secondary)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 15px',
            letterSpacing: '0.5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            borderRadius: '4px 0 0 4px',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '5px' }}>LAUNCH SALE</div>
            <CountdownTimer />
            <div style={{ 
              fontSize: '12px', 
              textAlign: 'center',
              opacity: 0.9
            }}>
            </div>
          </div>
          
          <div className="pricing-header">
            <div className="pricing-type">Clipboard It (Forever)</div>
            
            <div style={{ position: 'relative', marginTop: '20px', marginBottom: '15px' }}>
              {/* Original price with elegant strikethrough */}
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                position: 'relative'
              }}>
                <span style={{ 
                  fontSize: '16px', 
                  color: 'var(--gray-400)',
                  marginRight: '5px'
                }}>$</span>
                <span style={{ 
                  fontSize: '28px', 
                  fontWeight: '600', 
                  color: 'var(--gray-400)',
                  position: 'relative'
                }}>
                  24.99
                  <span style={{
                    position: 'absolute',
                    width: '110%',
                    height: '2px',
                    background: 'var(--gray-400)',
                    left: '-5%',
                    top: '50%',
                    borderRadius: '1px'
                  }}></span>
                </span>
              </div>
              
              {/* New price */}
              <div className="pricing-price" style={{ display: 'flex', justifyContent: 'center' }}>
                <span className="pricing-currency" style={{ 
                  alignSelf: 'flex-start',
                  marginTop: '10px',
                  color: 'var(--white)'
                }}>$</span>
                <span style={{ 
                  fontSize: '50px', 
                  fontWeight: '700',
                  color: 'var(--white)',
                  lineHeight: '1'
                }}>19</span>
                <span style={{ 
                  fontWeight: '700',
                  fontSize: '30px',
                  alignSelf: 'flex-end',
                  marginBottom: '8px',
                  color: 'var(--white)'
                }}>.99</span>
              </div>
            </div>
            
            <div className="pricing-period" style={{ 
              display: 'inline-block',
              padding: '5px 15px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              fontSize: '14px',
              marginTop: '5px'
            }}>
              One-time payment • Limited offer
            </div>
          </div>
          
          <p className="pricing-description">
            Everything you need to streamline your image workflow in Premiere Pro.
          </p>
          
          <ul className="pricing-features">
            <PricingFeature text="All features included" />
            <PricingFeature text="Lifetime updates" />
            <PricingFeature text="Works with Premiere Pro 2023 and later" />
            <PricingFeature text="Compatible with Mac and Windows" />
            <PricingFeature text="Email support" />
          </ul>
          
          <a 
            href="https://shop.austindavenport.com/products/clipboard-it" 
            className="pricing-button"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--white)',
              transition: 'all 0.3s ease',
            }}
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;