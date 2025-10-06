import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecruiterProfile.css';

const RecruiterProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [profileData, setProfileData] = useState({
    companyLogo: '',
    companyName: 'OpenAI Pvt Ltd',
    linkedinUrl: 'https://linkedin.com/company/openai',
    location: 'San Francisco, CA'
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData(prev => ({
        ...prev,
        companyLogo: file.name
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccessMessage(true);
    console.log('Profile updated:', profileData);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleBackToDashboard = () => {
    navigate('/recruiter-dashboard');
  };

  return (
    <div className="recruiter-profile-page">
      {/* Success Message Toast */}
      {showSuccessMessage && (
        <div className="success-toast">
          ✓ Profile updated successfully!
        </div>
      )}

      <div className="recruiter-profile-container">
        {/* Top Bar with Back and Edit/Save Button */}
        <div className="profile-top-bar">
          <button className="back-dashboard-btn" onClick={handleBackToDashboard}>
            ← Back to Dashboard
          </button>
          {!isEditing ? (
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          ) : (
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          )}
        </div>

        {/* Profile Header */}
        <div className="profile-header">
          <h1 className="profile-title">Edit Profile</h1>
        </div>

        {/* Company Logo Section */}
        <div className="logo-section">
          <div className="logo-preview-container">
            {logoPreview ? (
              <img src={logoPreview} alt="Company Logo" className="logo-preview" />
            ) : (
              <div className="logo-placeholder">
                <span className="logo-icon">🏢</span>
              </div>
            )}
          </div>
          <div className="logo-upload-container">
            <label htmlFor="companyLogo" className="logo-label">Company Logo</label>
            <input
              type="file"
              id="companyLogo"
              name="companyLogo"
              accept="image/*"
              onChange={handleLogoChange}
              disabled={!isEditing}
              className="file-input"
            />
            <label htmlFor="companyLogo" className={`logo-upload-btn ${!isEditing ? 'disabled' : ''}`}>
              <span className="upload-icon">📷</span>
              <span className="upload-text">
                {profileData.companyLogo || 'Upload Logo'}
              </span>
            </label>
          </div>
        </div>

        {/* Profile Form */}
        <div className="recruiter-profile-form">
          {/* Company Name */}
          <div className="form-field">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={profileData.companyName}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Enter company name"
            />
          </div>

          {/* LinkedIn URL */}
          <div className="form-field">
            <label htmlFor="linkedinUrl">Company LinkedIn URL</label>
            <input
              type="url"
              id="linkedinUrl"
              name="linkedinUrl"
              value={profileData.linkedinUrl}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="https://linkedin.com/company/yourcompany"
            />
          </div>

          {/* Location */}
          <div className="form-field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={profileData.location}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Enter company location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;

