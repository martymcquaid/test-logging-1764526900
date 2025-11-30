import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
      <FeatureCard title="Feature One" description="Description of feature one." />
      <FeatureCard title="Feature Two" description="Description of feature two." />
      <FeatureCard title="Feature Three" description="Description of feature three." />
    </div>
  );
};

export default FeaturesSection;