import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {
  const navigate = useNavigate();

  // Sample project data - In real app, this would come from backend/state management
  // Projects are ordered from newest to oldest (based on posting date)
  const [projects] = useState([
    {
      id: 1,
      projectName: 'E-commerce Website Development',
      location: 'Mumbai, India',
      salary: '₹50,000',
      status: 'In Progress',
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      projectName: 'Mobile App UI/UX Design',
      location: 'Bangalore, India',
      salary: '₹35,000',
      status: 'Completed',
      postedDate: '2024-01-10'
    },
    {
      id: 3,
      projectName: 'Database Migration Project',
      location: 'Pune, India',
      salary: '₹45,000',
      status: 'About to Start',
      postedDate: '2024-01-08'
    },
    {
      id: 4,
      projectName: 'React Dashboard Development',
      location: 'Delhi, India',
      salary: '₹60,000',
      status: 'Not Started',
      postedDate: '2024-01-05'
    },
    {
      id: 5,
      projectName: 'API Integration Services',
      location: 'Hyderabad, India',
      salary: '₹40,000',
      status: 'In Progress',
      postedDate: '2024-01-03'
    },
    {
      id: 6,
      projectName: 'Social Media Marketing Campaign',
      location: 'Chennai, India',
      salary: '₹30,000',
      status: 'Completed',
      postedDate: '2024-01-01'
    }
  ]);

  const handleBackToDashboard = () => {
    navigate('/recruiter-dashboard');
  };

  // Get status class based on status value
  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'About to Start':
        return 'status-about-to-start';
      case 'Not Started':
        return 'status-not-started';
      default:
        return '';
    }
  };

  return (
    <div className="all-projects-page">
      {/* Header */}
      <div className="all-projects-header">
        <div className="header-content">
          <h1 className="page-title">All Posted Projects</h1>
          <p className="projects-count">Total Projects: {projects.length}</p>
        </div>
        <button className="back-dashboard-btn" onClick={handleBackToDashboard}>
          ← Back to Dashboard
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        {projects.length === 0 ? (
          <div className="no-projects">
            <h3>No projects posted yet!</h3>
            <p>Click the "Post" button to create your first project.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card-header">
                  <h3 className="project-name">{project.projectName}</h3>
                  <div className={`project-status ${getStatusClass(project.status)}`}>
                    <span className="status-indicator"></span>
                    {project.status}
                  </div>
                </div>
                
                <div className="project-details-section">
                  <div className="detail-item">
                    <span className="detail-label">Salary Offered:</span>
                    <span className="detail-value salary-value">{project.salary}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value location-value">{project.location}</span>
                  </div>
                </div>

                <div className="project-actions">
                  <button className="action-btn view-btn">View Details</button>
                  <button className="action-btn edit-btn">Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;

