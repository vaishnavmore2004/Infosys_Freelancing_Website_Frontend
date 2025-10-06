import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FreelancerDashboard.css';

const FreelancerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const handleProfile = () => {
    console.log('Navigating to profile...');
    navigate('/profile');
  };

  const handleApply = (projectName) => {
    console.log(`Applied for ${projectName}`);
  };

  return (
    <div className="dashboard-page">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="welcome-text">
          <h1>Welcome! Freelancer</h1>
        </div>
        <div className="header-buttons">
          <button className="header-btn" onClick={handleProfile}>
            Profile
          </button>
          <button className="header-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        {/* Top Section: Stats and Projects Completed */}
        <div className="dashboard-top-section">
          {/* Stats Section (Left) */}
          <div className="stats-section">
            <h2 className="section-title">Total Earnings this month</h2>
            <div className="earnings-amount">₹12,000</div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">Projects completed</div>
                <div className="stat-value">10</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-label">Overall ratings</div>
                <div className="stat-value">4.8 ⭐</div>
              </div>
            </div>
          </div>

          {/* Projects Completed Section (Right) */}
          <div className="projects-completed-section">
            <h2 className="section-title">Projects Completed</h2>
            
            <div className="completed-projects-list">
              <div className="completed-project-card">
                <div className="project-name">Web Dev</div>
                <div className="project-earned">Earned ₹4000</div>
              </div>
              
              <div className="completed-project-card">
                <div className="project-name">Python Dev</div>
                <div className="project-earned">Earned ₹4000</div>
              </div>
              
              <div className="completed-project-card">
                <div className="project-name">DBA</div>
                <div className="project-earned">Earned ₹4000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Find Projects Section (Bottom Full Width) */}
        <div className="find-projects-section">
          <h2 className="section-title">Find Projects</h2>
          
          <div className="available-projects">
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">Web Dev</h3>
                <div className="project-details">
                  <span className="project-budget">₹4500</span>
                  <span className="project-separator">•</span>
                  <span className="project-client">XYZ Solutions</span>
                </div>
              </div>
              <button 
                className="apply-btn"
                onClick={() => handleApply('Web Dev')}
              >
                Apply
              </button>
            </div>
            
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">DBA</h3>
                <div className="project-details">
                  <span className="project-budget">₹4500</span>
                  <span className="project-separator">•</span>
                  <span className="project-client">ABC Solutions</span>
                </div>
              </div>
              <button 
                className="apply-btn"
                onClick={() => handleApply('DBA')}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;

