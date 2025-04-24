import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
