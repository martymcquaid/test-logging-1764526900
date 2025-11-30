import React from 'react';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import ContactForm from '../components/ContactForm';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturesSection />
      <ContactForm />
    </div>
  );
};

export default LandingPage;