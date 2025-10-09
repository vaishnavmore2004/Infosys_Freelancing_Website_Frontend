import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', {
      role: selectedRole,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      agreeToTerms: formData.agreeToTerms
    });
    alert(`Registration submitted for ${selectedRole}! Check console for details.`);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h1 className="register-title">Join TalentLoop</h1>
          <p className="register-subtitle">Create your account and start your journey</p>
        </div>
        
        {!selectedRole ? (
          <div className="role-selection">
            <h2 className="role-selection-title">Choose Your Role</h2>
            <div className="role-options">
              <button 
                className="role-option freelancer"
                onClick={() => handleRoleSelection('freelancer')}
              >
                <div className="role-icon">💼</div>
                <h3>Register as Freelancer</h3>
                <p>Find amazing projects and build your portfolio</p>
              </button>
              
              <button 
                className="role-option recruiter"
                onClick={() => handleRoleSelection('recruiter')}
              >
                <div className="role-icon">🔍</div>
                <h3>Register as Recruiter</h3>
                <p>Hire talented professionals for your projects</p>
              </button>
            </div>
          </div>
        ) : (
          <div className="register-form fade-in">
            <div className="selected-role">
              <span className="role-badge">{selectedRole}</span>
              <button 
                className="change-role-btn"
                onClick={() => setSelectedRole(null)}
              >
                Change Role
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address" 
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a secure password" 
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password" 
                  required
                />
              </div>
              
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkmark"></span>
                  I agree to the Terms and Conditions
                </label>
              </div>
              
              <div className="button-container">
                <button type="submit" className="register-button">
                  Register
                </button>
              </div>
            </form>
            
            <div className="register-footer">
              <p>Already have an account? <Link to="/login">Sign in here</Link></p>
              <Link to="/" className="back-home">← Back to Home</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
