import React from 'react';
import PricingCard from './PricingCard';

const PricingSection: React.FC = () => {
    const tiers = [
        { title: 'Free', price: '$0/month', features: ['Basic features', 'Community support'] },
        { title: 'Pro', price: '$19/month', features: ['Advanced features', 'Priority support'] },
        { title: 'Enterprise', price: '$99/month', features: ['All features', 'Dedicated support'] },
    ];

    return (
        <section className="pricing-section">
            <h2>Pricing</h2>
            <div className="pricing-cards">
                {tiers.map((tier, index) => (
                    <PricingCard key={index} {...tier} />
                ))}
            </div>
        </section>
    );
};

export default PricingSection;