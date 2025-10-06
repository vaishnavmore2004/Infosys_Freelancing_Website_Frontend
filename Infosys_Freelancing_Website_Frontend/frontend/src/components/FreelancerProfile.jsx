import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FreelancerProfile.css';

const FreelancerProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [profileData, setProfileData] = useState({
    profilePhoto: '',
    name: 'John Doe',
    course: 'B.Tech',
    expertise: 'CSE',
    location: 'Mumbai, India',
    skills: 'React, Node.js, Python, MongoDB',
    certification: '',
    resume: '',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    experience: '3 years'
  });

  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      setProfileData(prev => ({
        ...prev,
        [name]: file.name
      }));
      
      // Special handling for profile photo preview
      if (name === 'profilePhoto') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePhotoPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
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
    navigate('/freelancer-dashboard');
  };

  return (
    <div className="freelancer-profile-page">
      {/* Success Message Toast */}
      {showSuccessMessage && (
        <div className="success-toast">
          ✓ Profile updated successfully!
        </div>
      )}

      <div className="profile-container">
        {/* Header with Edit/Save Button */}
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

        <div className="profile-header">
          <h1 className="profile-title">Edit Profile</h1>
        </div>

        {/* Profile Photo Section */}
        <div className="profile-photo-section">
          <div className="photo-preview-container">
            {profilePhotoPreview ? (
              <img src={profilePhotoPreview} alt="Profile" className="profile-photo-preview" />
            ) : (
              <div className="photo-placeholder">
                <span className="photo-icon">👤</span>
              </div>
            )}
          </div>
          <div className="photo-upload-container">
            <label htmlFor="profilePhoto" className="photo-label">Profile Photo</label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={handleFileChange}
              disabled={!isEditing}
              className="file-input"
            />
            <label htmlFor="profilePhoto" className={`photo-upload-btn ${!isEditing ? 'disabled' : ''}`}>
              <span className="upload-icon">📷</span>
              <span className="upload-text">
                {profileData.profilePhoto || 'Upload Photo'}
              </span>
            </label>
          </div>
        </div>

        {/* Profile Form */}
        <div className="profile-form">
          {/* Name */}
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Enter your name"
            />
          </div>

          {/* Course */}
          <div className="form-field">
            <label htmlFor="course">Course</label>
            <select
              id="course"
              name="course"
              value={profileData.course}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="BBA">BBA</option>
            </select>
          </div>

          {/* Expertise */}
          <div className="form-field">
            <label htmlFor="expertise">Expertise</label>
            <select
              id="expertise"
              name="expertise"
              value={profileData.expertise}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="Aero">Aero</option>
            </select>
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
              placeholder="Enter your location"
            />
          </div>

          {/* Skills */}
          <div className="form-field">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={profileData.skills}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Enter your skills (comma separated)"
            />
          </div>

          {/* Certification */}
          <div className="form-field">
            <label htmlFor="certification">Certification</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="certification"
                name="certification"
                onChange={handleFileChange}
                disabled={!isEditing}
                className="file-input"
              />
              <label htmlFor="certification" className={`file-input-label ${!isEditing ? 'disabled' : ''}`}>
                <span className="file-icon">📄</span>
                <span className="file-text">
                  {profileData.certification || 'Upload Document'}
                </span>
              </label>
            </div>
          </div>

          {/* Upload Resume */}
          <div className="form-field">
            <label htmlFor="resume">Upload Resume</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                disabled={!isEditing}
                className="file-input"
              />
              <label htmlFor="resume" className={`file-input-label ${!isEditing ? 'disabled' : ''}`}>
                <span className="file-icon">📄</span>
                <span className="file-text">
                  {profileData.resume || 'Upload Resume'}
                </span>
              </label>
            </div>
          </div>

          {/* LinkedIn URL */}
          <div className="form-field">
            <label htmlFor="linkedinUrl">LinkedIn URL</label>
            <input
              type="url"
              id="linkedinUrl"
              name="linkedinUrl"
              value={profileData.linkedinUrl}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          {/* Experience */}
          <div className="form-field">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={profileData.experience}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Enter your experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;

