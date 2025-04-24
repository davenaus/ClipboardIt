import React from 'react';

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
          <div className="pricing-header">
            <div className="pricing-type">Clipboard It (Forever)</div>
            <div className="pricing-price">
              <span className="pricing-currency">$</span>
              19.99
            </div>
            <div className="pricing-period">One-time payment</div>
          </div>
          
          <p className="pricing-description">Everything you need to streamline your image workflow in Premiere Pro.</p>
          
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
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
