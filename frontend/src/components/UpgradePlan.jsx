import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpgradePlan.css';

const UpgradePlan = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleBackToDashboard = () => {
    navigate('/freelancer-dashboard');
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    // Here you would integrate with payment gateway
    alert(`Payment processing for ${selectedPlan.title} - ${isYearly ? 'Yearly' : 'Monthly'} subscription`);
    setShowPaymentModal(false);
    setSelectedPlan(null);
  };

  const plans = [
    {
      id: 'free',
      title: 'Free Plan',
      price: '₹0',
      period: '/ month',
      yearlyPrice: '₹0',
      description: 'Perfect for new freelancers building their profiles and exploring the platform.',
      features: [
        'Apply to 5 Projects per Day',
        'Access to Level System (up to Level 10)'
        
        
      ],
      buttonText: 'Start for Free',
      buttonStyle: 'free-btn',
      isFree: true
    },
    {
      id: 'pro',
      title: 'Pro Plan',
      price: '₹499',
      period: '/ month',
      yearlyPrice: '₹399',
      yearlySavings: 'Save ₹1,200',
      description: 'Ideal for active freelancers who want to stand out and get consistent work.',
      features: [
        'Apply to Unlimited Projects',
        'Profile marked as "Pro Verified"',
        'Access to Level System (up to Level 70)',
        'Access to Direct Chat with Recruiters',
        'Chat Support'
        
      ],
      buttonText: 'Upgrade to Pro',
      buttonStyle: 'pro-btn',
      popular: true
    },
    {
      id: 'advanced',
      title: 'Advanced Plan',
      price: '₹999',
      period: '/ month',
      yearlyPrice: '₹799',
      yearlySavings: 'Save ₹2,400',
      description: 'Perfect for full-time or agency-level freelancers managing multiple clients.',
      features: [
        'Unlimited Job Applications',
        'Access to Full Level System (Level 1–100)',
        'Access to Premium Client Leads (Top Companies)',
        'Dedicated Account Support Manager',
        '24×7 Premium Support'
        
      ],
      buttonText: 'Go Advanced',
      buttonStyle: 'advanced-btn'
    }
  ];

  const getCurrentPrice = (plan) => {
    if (isYearly && plan.yearlyPrice) {
      return plan.yearlyPrice;
    }
    return plan.price;
  };

  const getCurrentPeriod = (plan) => {
    if (isYearly) {
      return '/ year';
    }
    return plan.period;
  };

  const getSavings = (plan) => {
    if (isYearly && plan.yearlySavings) {
      return plan.yearlySavings;
    }
    return null;
  };

  const comparisonFeatures = [
    {
      feature: 'Daily Applications',
      free: '5',
      pro: 'Unlimited',
      advanced: 'Unlimited'
    },
    {
      feature: 'Level System Access',
      free: 'Up to Level 10',
      pro: 'Up to Level 70',
      advanced: 'Full System (1-100)'
    },
    {
      feature: 'Direct Chat with Recruiters',
      free: '✗',
      pro: '✓',
      advanced: '✓'
    },
    {
      feature: 'Profile Verification',
      free: 'Basic',
      pro: 'Pro Verified',
      advanced: 'Featured'
    },
    {
      feature: 'Search Priority',
      free: 'Standard',
      pro: 'Priority',
      advanced: 'Featured'
    },
    {
      feature: 'Skill Assessment Tests',
      free: '1 Free',
      pro: '5 Tests',
      advanced: 'Unlimited'
    },
    {
      feature: 'Analytics Dashboard',
      free: 'Basic',
      pro: 'Advanced',
      advanced: 'Premium'
    },
    {
      feature: 'Customer Support',
      free: 'Community',
      pro: 'Chat Support',
      advanced: '24×7 Premium'
    },
    {
      feature: 'Project Management Tools',
      free: '✗',
      pro: 'Basic',
      advanced: 'Advanced'
    },
    {
      feature: 'Premium Client Leads',
      free: '✗',
      pro: '✗',
      advanced: '✓'
    }
  ];

  return (
    <div className="upgrade-plan-page">
      {/* Header */}
      <div className="upgrade-header">
        <button className="back-btn" onClick={handleBackToDashboard}>
          ← Back to Dashboard
        </button>
      </div>

      {/* Main Content */}
      <div className="upgrade-container">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title">
            Choose the Perfect Plan for Your Freelance Success
          </h1>
          <p className="main-subtitle">
            Unlock your potential with our comprehensive subscription plans designed for freelancers at every stage
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Toggle Section */}
        <div className="toggle-section">
          <div className="toggle-container">
            <span className={`toggle-option ${!isYearly ? 'active' : ''}`}>
              Monthly
            </span>
            <div 
              className={`toggle-switch ${isYearly ? 'yearly' : 'monthly'}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className="toggle-slider"></div>
            </div>
            <span className={`toggle-option ${isYearly ? 'active' : ''}`}>
              Yearly <span className="save-badge">Save up to 20%</span>
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-title">{plan.title}</h3>
                <div className="plan-price">
                  <span className="price-amount">{getCurrentPrice(plan)}</span>
                  <span className="price-period">{getCurrentPeriod(plan)}</span>
                  {getSavings(plan) && (
                    <div className="savings-badge">{getSavings(plan)}</div>
                  )}
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="check-icon">✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="plan-actions">
                <button 
                  className={`plan-button ${plan.buttonStyle}`}
                  onClick={() => handlePlanSelection(plan)}
                >
                  {plan.buttonText}
                </button>
                {!plan.isFree && (
                  <button 
                    className="upgrade-plan-btn"
                    onClick={() => handlePlanSelection(plan)}
                    title={`Upgrade to ${plan.title} - Get all premium features`}
                  >
                    🚀 Apply for {plan.title}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Compare Plans Section */}
        <div className="compare-section">
          <div className="compare-header">
            <h2 className="compare-title">Compare All Plans</h2>
            <p className="compare-subtitle">See exactly what each plan offers</p>
          </div>
          
          <button 
            className="compare-toggle"
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? '🔍 Hide Comparison' : '🔍 Show Detailed Comparison'}
          </button>
          
          {showComparison && (
            <div className={`comparison-table ${showComparison ? 'show' : ''}`}>
              <div className="comparison-header">
                <div className="feature-column">Features</div>
                <div className="plan-column">Free</div>
                <div className="plan-column popular-column">Pro</div>
                <div className="plan-column">Advanced</div>
              </div>
              
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="comparison-row">
                  <div className="feature-column">{item.feature}</div>
                  <div className="plan-column">{item.free}</div>
                  <div className="plan-column popular-column">{item.pro}</div>
                  <div className="plan-column">{item.advanced}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I change my plan anytime?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and UPI payments for Indian users.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>Yes, all paid plans come with a 7-day free trial. No credit card required to start.</p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel anytime?</h3>
              <p>Absolutely! You can cancel your subscription anytime with no cancellation fees.</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="bottom-note">
          <p>Join thousands of successful freelancers who have grown their careers with TalentLoop.</p>
          <div className="trust-indicators">
            <span>🔒 Secure Payments</span>
            <span>💯 Money Back Guarantee</span>
            <span>📞 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedPlan && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <div className="modal-header">
              <h3>Complete Your Subscription</h3>
              <button 
                className="close-modal"
                onClick={() => setShowPaymentModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="selected-plan-info">
                <h4>{selectedPlan.title}</h4>
                <div className="plan-price-display">
                  <span className="price">{getCurrentPrice(selectedPlan)}</span>
                  <span className="period">{getCurrentPeriod(selectedPlan)}</span>
                </div>
                {getSavings(selectedPlan) && (
                  <div className="savings-display">{getSavings(selectedPlan)}</div>
                )}
              </div>
              <div className="payment-options">
                <h5>Choose Payment Method:</h5>
                <div className="payment-methods">
                  <label className="payment-method">
                    <input type="radio" name="payment" value="card" defaultChecked />
                    <span>💳 Credit/Debit Card</span>
                  </label>
                  <label className="payment-method">
                    <input type="radio" name="payment" value="upi" />
                    <span>📱 UPI Payment</span>
                  </label>
                  <label className="payment-method">
                    <input type="radio" name="payment" value="paypal" />
                    <span>🅿️ PayPal</span>
                  </label>
                </div>
              </div>
              <div className="modal-actions">
                <button 
                  className="cancel-btn"
                  onClick={() => setShowPaymentModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="confirm-payment-btn"
                  onClick={handlePayment}
                >
                  Complete Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpgradePlan;
