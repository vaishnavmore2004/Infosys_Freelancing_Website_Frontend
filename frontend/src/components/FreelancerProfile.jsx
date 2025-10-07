import React, { useState } from 'react';
import './FreelancerProfile.css';

const FreelancerProfile = () => {
  const [editingSections, setEditingSections] = useState({});
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    course: 'Computer Science',
    bio: 'Experienced full-stack developer with 5+ years of experience in React, Node.js, and Python. Passionate about creating innovative solutions and delivering high-quality software.',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@email.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    portfolio: 'https://johndoe.dev',
    skills: 'React, Node.js, Python, JavaScript, TypeScript, MongoDB, PostgreSQL, AWS, Docker',
    experience: '5+ years of experience in web development. Worked on various projects including e-commerce platforms, SaaS applications, and mobile apps.',
    languages: ['English', 'Spanish', 'French'],
    courseName: 'Bachelor of Computer Science',
    university: 'University of Technology',
    completionDate: '2020-06-15',
    jobPreferences: 'Looking for remote full-stack developer positions. Prefer startups and innovative companies. Open to both contract and full-time opportunities.'
  });

  const [newLanguage, setNewLanguage] = useState('');

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSectionEdit = (section) => {
    setEditingSections(prev => ({
      ...prev,
      [section]: true
    }));
  };

  const handleSectionSave = (section) => {
    setEditingSections(prev => ({
      ...prev,
      [section]: false
    }));
    setShowSaveModal(true);
    setTimeout(() => setShowSaveModal(false), 2000);
    // In a real app, this would save to backend
    console.log(`${section} section saved:`, profileData);
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !profileData.languages.includes(newLanguage.trim())) {
      setProfileData(prev => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()]
      }));
      setNewLanguage('');
    }
  };

  const removeLanguage = (languageToRemove) => {
    setProfileData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang !== languageToRemove)
    }));
  };

  return (
    <div className="freelancer-profile">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <h1 className="profile-title">
            <span className="title-accent">View Profile</span>
          </h1>
        </div>

        {/* Save Confirmation Modal */}
        {showSaveModal && (
          <div className="save-modal-overlay">
            <div className="save-modal">
              <div className="save-modal-content">
                <div className="save-modal-icon">✅</div>
                <p className="save-modal-text">Changes saved successfully!</p>
              </div>
            </div>
          </div>
        )}

        <div className="profile-grid">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="section-header">
              <h3 className="section-title">Profile Information</h3>
              {!editingSections.profile ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('profile')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('profile')}>
                  Save
                </button>
              )}
            </div>
            <div className="profile-photo-section">
              <div className="profile-photo-placeholder">
                <div className="photo-upload-area">
                  <div className="photo-icon">📷</div>
                  <button className="upload-photo-btn" disabled={!editingSections.profile}>
                    Upload Photo
                  </button>
                </div>
              </div>
            </div>
            <div className="profile-info">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!editingSections.profile}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>Course</label>
                <select
                  value={profileData.course}
                  onChange={(e) => handleInputChange('course', e.target.value)}
                  disabled={!editingSections.profile}
                  className="profile-input"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>
            </div>
          </div>

          {/* Profile Summary / Bio Section */}
          <div className="bio-section">
            <div className="section-header">
              <h3 className="section-title">Profile Summary / Bio</h3>
              {!editingSections.bio ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('bio')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('bio')}>
                  Save
                </button>
              )}
            </div>
            <div className="input-group">
              <label>Profile Summary / Bio</label>
              <textarea
                value={profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!editingSections.bio}
                className="profile-textarea"
                rows="4"
              />
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="contact-section">
            <div className="section-header">
              <h3 className="section-title">Contact Details</h3>
              {!editingSections.contact ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('contact')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('contact')}>
                  Save
                </button>
              )}
            </div>
            <div className="contact-grid">
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!editingSections.contact}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!editingSections.contact}
                  className="profile-input"
                />
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="resume-section">
            <div className="section-header">
              <h3 className="section-title">Resume</h3>
              {!editingSections.resume ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('resume')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('resume')}>
                  Save
                </button>
              )}
            </div>
            <div className="file-upload-area">
              <button className="upload-resume-btn" disabled={!editingSections.resume}>
                📄 Upload Resume
              </button>
            </div>
          </div>

          {/* Gamified Badge Section */}
          <div className="badge-section">
            <div className="badge-container">
              <div className="badge-icon">🛡️</div>
              <div className="badge-content">
                <div className="badge-level">Level 3</div>
                <div className="badge-title">Rookie</div>
                <div className="badge-progress">
                  <div className="progress-text">8/10 projects — 80%</div>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Experience Section */}
          <div className="skills-section">
            <div className="section-header">
              <h3 className="section-title">Skills and Experience</h3>
              {!editingSections.skills ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('skills')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('skills')}>
                  Save
                </button>
              )}
            </div>
            <div className="skills-grid">
              <div className="input-group">
                <label>Skills</label>
                <textarea
                  value={profileData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  disabled={!editingSections.skills}
                  className="profile-textarea"
                  rows="3"
                  placeholder="List your technical skills separated by commas"
                />
              </div>
              <div className="input-group">
                <label>Experience</label>
                <textarea
                  value={profileData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  disabled={!editingSections.skills}
                  className="profile-textarea"
                  rows="3"
                  placeholder="Describe your professional experience"
                />
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="social-section">
            <div className="section-header">
              <h3 className="section-title">Social Links</h3>
              {!editingSections.social ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('social')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('social')}>
                  Save
                </button>
              )}
            </div>
            <div className="social-grid">
              <div className="input-group">
                <label>LinkedIn</label>
                <input
                  type="url"
                  value={profileData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  disabled={!editingSections.social}
                  className="profile-input"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div className="input-group">
                <label>GitHub</label>
                <input
                  type="url"
                  value={profileData.github}
                  onChange={(e) => handleInputChange('github', e.target.value)}
                  disabled={!editingSections.social}
                  className="profile-input"
                  placeholder="https://github.com/yourusername"
                />
              </div>
              <div className="input-group">
                <label>Portfolio</label>
                <input
                  type="url"
                  value={profileData.portfolio}
                  onChange={(e) => handleInputChange('portfolio', e.target.value)}
                  disabled={!editingSections.social}
                  className="profile-input"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <div className="section-header">
              <h3 className="section-title">Education</h3>
              {!editingSections.education ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('education')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('education')}>
                  Save
                </button>
              )}
            </div>
            <div className="education-grid">
              <div className="input-group">
                <label>Course Name</label>
                <input
                  type="text"
                  value={profileData.courseName}
                  onChange={(e) => handleInputChange('courseName', e.target.value)}
                  disabled={!editingSections.education}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>University / College</label>
                <input
                  type="text"
                  value={profileData.university}
                  onChange={(e) => handleInputChange('university', e.target.value)}
                  disabled={!editingSections.education}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>Date of Completion</label>
                <input
                  type="date"
                  value={profileData.completionDate}
                  onChange={(e) => handleInputChange('completionDate', e.target.value)}
                  disabled={!editingSections.education}
                  className="profile-input"
                />
              </div>
            </div>
          </div>

          {/* Languages Known Section */}
          <div className="languages-section">
            <div className="section-header">
              <h3 className="section-title">Languages Known</h3>
              {!editingSections.languages ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('languages')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('languages')}>
                  Save
                </button>
              )}
            </div>
            <div className="languages-container">
              <div className="language-input-group">
                <input
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  disabled={!editingSections.languages}
                  className="profile-input"
                  placeholder="Add a language"
                />
                <button 
                  className="add-language-btn" 
                  onClick={addLanguage}
                  disabled={!editingSections.languages || !newLanguage.trim()}
                >
                  +
                </button>
              </div>
              <div className="languages-list">
                {profileData.languages.map((language, index) => (
                  <div key={index} className="language-tag">
                    <span>{language}</span>
                    {editingSections.languages && (
                      <button 
                        className="remove-language-btn"
                        onClick={() => removeLanguage(language)}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Preferences Section */}
          <div className="preferences-section">
            <div className="section-header">
              <h3 className="section-title">Job Preferences</h3>
              {!editingSections.preferences ? (
                <button className="section-edit-btn" onClick={() => handleSectionEdit('preferences')}>
                  Edit
                </button>
              ) : (
                <button className="section-save-btn" onClick={() => handleSectionSave('preferences')}>
                  Save
                </button>
              )}
            </div>
            <div className="input-group">
              <label>Job Preferences</label>
              <textarea
                value={profileData.jobPreferences}
                onChange={(e) => handleInputChange('jobPreferences', e.target.value)}
                disabled={!editingSections.preferences}
                className="profile-textarea"
                rows="4"
                placeholder="Describe your job preferences, work style, and career goals"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
