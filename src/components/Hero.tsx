import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Service</h1>
      <p className="mt-4 text-lg">Your satisfaction is our priority!</p>
      <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition">Get Started</button>
    </div>
  );
};

export default Hero;