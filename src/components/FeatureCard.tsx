import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition hover:shadow-xl">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;