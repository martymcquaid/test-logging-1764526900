import React from 'react';
import './PricingSection.css';

interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
    return (
        <div className="pricing-card">
            <h3>{title}</h3>
            <p className="price">{price}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;