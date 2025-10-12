import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecruiterDashboard.css';

const RecruiterDashboard = () => {
  const navigate = useNavigate();

  // Sample project data - showing first two projects (newest)
  // In real app, this would be synced with AllProjects data from backend/state management
  const [recentProjects] = useState([
    {
      id: 1,
      projectName: 'E-commerce Website Development',
      freelancer: 'John Doe',
      salary: '₹50,000'
    },
    {
      id: 2,
      projectName: 'Mobile App UI/UX Design',
      freelancer: 'Jane Smith',
      salary: '₹35,000'
    }
  ]);
  
  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const handleProfile = () => {
    console.log('Navigating to profile...');
    navigate('/recruiter-profile');
  };

  const handleContact = (freelancerName) => {
    console.log(`Contacting ${freelancerName}`);
  };

  const handlePostProject = () => {
    console.log('Navigating to post project page...');
    navigate('/post-project');
  };

  const handleViewAllProjects = () => {
    console.log('Navigating to all projects page...');
    navigate('/all-projects');
  };

  return (
    <div className="recruiter-dashboard-page">
      {/* Header Section */}
      <header className="recruiter-header">
        <div className="welcome-text">
          <h1>Welcome! Recruiter</h1>
        </div>
        <div className="header-buttons">
          <button className="header-btn" onClick={handlePostProject}>
            Post
          </button>
          <button className="header-btn" onClick={handleProfile}>
            Profile
          </button>
          <button className="header-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="recruiter-content">
        {/* Top Section: Analytics and Current Projects */}
        <div className="recruiter-top-section">
          {/* Analytics Section (Left) */}
          <div className="analytics-section">
            <h2 className="section-title">Monthly Analytics</h2>
            
            <div className="analytics-grid">
              <div className="analytics-card">
                <div className="analytics-label">Money Spent</div>
                <div className="analytics-value">₹80,000</div>
              </div>
              
              <div className="analytics-card">
                <div className="analytics-label">Projects Completed</div>
                <div className="analytics-value">10</div>
              </div>
            </div>
          </div>

          {/* Current Projects Section (Right) */}
          <div className="current-projects-section">
            <div className="current-projects-header">
              <h2 className="section-title">Current Projects</h2>
              <button className="view-all-btn" onClick={handleViewAllProjects}>
                View All
              </button>
            </div>
            
            <div className="current-projects-list">
              {recentProjects.map((project) => (
                <div key={project.id} className="current-project-card">
                  <div className="project-details">
                    <div className="project-field">
                      <span className="field-label">Project:</span>
                      <span className="field-value">{project.projectName}</span>
                    </div>
                    <div className="project-field">
                      <span className="field-label">Freelancer:</span>
                      <span className="field-value">{project.freelancer}</span>
                    </div>
                    <div className="project-field">
                      <span className="field-label">Pay:</span>
                      <span className="field-value pay-amount">{project.salary}</span>
                    </div>
                  </div>
                  <button 
                    className="contact-btn"
                    onClick={() => handleContact(project.freelancer)}
                  >
                    Contact
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Post A Project Section (Compact) */}
        <div className="post-project-compact-section">
          <h2 className="post-project-title">POST A PROJECT !</h2>
          <button className="glow-post-btn" onClick={handlePostProject}>
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
