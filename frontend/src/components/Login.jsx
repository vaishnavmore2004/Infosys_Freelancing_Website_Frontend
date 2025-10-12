import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
    newPassword: ''
  });

  const handleForgotPasswordChange = (field, value) => {
    setForgotPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOpenForgotPassword = () => {
    setShowForgotPasswordModal(true);
    setForgotPasswordData({ email: '', newPassword: '' });
  };

  const handleCloseForgotPassword = () => {
    setShowForgotPasswordModal(false);
    setForgotPasswordData({ email: '', newPassword: '' });
  };

  const handleSubmitForgotPassword = () => {
    if (forgotPasswordData.email) {
      console.log('Password reset requested for:', forgotPasswordData.email);
      setShowForgotPasswordModal(false);
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 2000);
      setForgotPasswordData({ email: '', newPassword: '' });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="login-page">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <div className="success-modal-content">
              <div className="success-modal-icon">✅</div>
              <p className="success-modal-text">Mail Sent Successfully!</p>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div className="forgot-password-overlay" onClick={handleCloseForgotPassword}>
          <div className="forgot-password-modal" onClick={(e) => e.stopPropagation()}>
            <div className="forgot-password-header">
              <h2>Reset Password</h2>
              <button className="close-forgot-btn" onClick={handleCloseForgotPassword}>
                ×
              </button>
            </div>
            <div className="forgot-password-content">
              <div className="form-group">
                <label>Registered Email</label>
                <input
                  type="email"
                  value={forgotPasswordData.email}
                  onChange={(e) => handleForgotPasswordChange('email', e.target.value)}
                  className="forgot-password-input"
                  placeholder="Enter your registered email"
                />
              </div>
              
              <button className="submit-forgot-btn" onClick={handleSubmitForgotPassword}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your TalentLoop account</p>
        </div>
        
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          
          <button className="login-button">
            Sign In
          </button>
          
          <div className="login-footer">
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
            <p className="forgot-password-link" onClick={handleOpenForgotPassword}>
              Forget Password?
            </p>
            <Link to="/" className="back-home">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

