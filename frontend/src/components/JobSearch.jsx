import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobSearch.css';

const JobSearch = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('recommended');
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobType: '',
    salary: '',
    location: '',
    experience: ''
  });

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const handleBackToDashboard = () => {
    navigate('/freelancer-dashboard');
  };

  const handleApply = (job) => {
    console.log(`Navigating to apply for ${job.title}`);
    navigate('/job-application', { 
      state: { 
        jobData: job
      } 
    });
  };

  // Load applied jobs from localStorage on component mount
  useEffect(() => {
    const savedAppliedJobs = localStorage.getItem('appliedJobs');
    if (savedAppliedJobs) {
      setAppliedJobs(JSON.parse(savedAppliedJobs));
    }
  }, []);

  // Check for new applied jobs when window gains focus (returning from job application)
  useEffect(() => {
    const handleFocus = () => {
      const savedAppliedJobs = localStorage.getItem('appliedJobs');
      if (savedAppliedJobs) {
        setAppliedJobs(JSON.parse(savedAppliedJobs));
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleSave = (job) => {
    const isJobSaved = savedJobs.some(savedJob => savedJob.id === job.id);
    
    if (isJobSaved) {
      // Remove from saved jobs
      setSavedJobs(prev => prev.filter(savedJob => savedJob.id !== job.id));
      console.log(`Removed ${job.title} from saved jobs`);
    } else {
      // Add to saved jobs
      setSavedJobs(prev => [...prev, job]);
      console.log(`Added ${job.title} to saved jobs`);
    }
  };

  const handleSelectAll = () => {
    const allJobIds = jobs.map(job => job.id);
    setSelectedJobs(selectedJobs.length === allJobIds.length ? [] : allJobIds);
  };

  const handleJobSelect = (jobId) => {
    setSelectedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Static job data
  const jobs = [
    {
      id: 1,
      title: "Senior Software Development Engineer Test",
      company: "Zodnik Solutions",
      experience: "4-7 yrs",
      location: "Hyderabad, India",
      salary: "₹8-12 LPA",
      postedDate: "Posted 16 days ago",
      isEarlyApplicant: true,
      jobType: "Hybrid",
      skills: ["React", "Node.js", "JavaScript", "TypeScript", "MongoDB", "AWS"],
      responsibilities: [
        "Design and develop scalable web applications using React and Node.js",
        "Collaborate with cross-functional teams to deliver high-quality software",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and technical discussions",
        "Mentor junior developers and contribute to team growth"
      ],
      description: "We are looking for a passionate Senior Software Development Engineer to join our dynamic team. You will be responsible for developing and maintaining high-quality web applications, working with modern technologies, and contributing to our product's success."
    },
    {
      id: 2,
      title: "Application Development Lead Analyst",
      company: "Manipal Cigna Insurance Group",
      experience: "5-8 yrs",
      location: "Hyderabad",
      salary: "₹10-15 LPA",
      postedDate: "Posted a month ago",
      isEarlyApplicant: true,
      jobType: "On-site",
      skills: ["Java", "Spring Boot", "Microservices", "SQL", "Docker", "Kubernetes"],
      responsibilities: [
        "Lead application development projects from conception to deployment",
        "Analyze business requirements and design technical solutions",
        "Manage development teams and ensure code quality standards",
        "Implement best practices for software architecture",
        "Coordinate with stakeholders to deliver projects on time"
      ],
      description: "Join our team as a Lead Analyst where you'll drive innovation in application development. We're seeking an experienced professional who can lead technical initiatives and mentor development teams."
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "TechCorp Solutions",
      experience: "3-6 yrs",
      location: "Bangalore, India",
      salary: "₹6-10 LPA",
      postedDate: "Posted 3 days ago",
      isEarlyApplicant: false,
      jobType: "Remote",
      skills: ["React", "Vue.js", "Python", "Django", "PostgreSQL", "Git"],
      responsibilities: [
        "Develop and maintain full-stack web applications",
        "Create responsive user interfaces using modern frameworks",
        "Build robust backend APIs and database schemas",
        "Implement automated testing and deployment pipelines",
        "Collaborate with design and product teams"
      ],
      description: "TechCorp Solutions is seeking a talented Full Stack Developer to join our innovative team. You'll work on cutting-edge projects and have the opportunity to shape the future of web development."
    },
    {
      id: 4,
      title: "React Developer",
      company: "Digital Innovations",
      experience: "2-5 yrs",
      location: "Mumbai, India",
      salary: "₹5-8 LPA",
      postedDate: "Posted 1 week ago",
      isEarlyApplicant: true,
      jobType: "Hybrid",
      skills: ["React", "Redux", "JavaScript", "CSS3", "HTML5", "REST APIs"],
      responsibilities: [
        "Build interactive user interfaces with React",
        "Implement state management using Redux",
        "Optimize application performance and user experience",
        "Write clean, reusable component code",
        "Work closely with UI/UX designers"
      ],
      description: "Digital Innovations is looking for a creative React Developer to join our frontend team. You'll be working on exciting projects that impact millions of users worldwide."
    },
    {
      id: 5,
      title: "Python Developer",
      company: "DataTech Labs",
      experience: "3-7 yrs",
      location: "Chennai, India",
      salary: "₹7-12 LPA",
      postedDate: "Posted 5 days ago",
      isEarlyApplicant: false,
      jobType: "On-site",
      skills: ["Python", "Django", "Flask", "PostgreSQL", "Redis", "Celery"],
      responsibilities: [
        "Develop scalable Python applications and APIs",
        "Work with databases and data processing pipelines",
        "Implement automated testing and deployment strategies",
        "Collaborate with data scientists and analysts",
        "Maintain and optimize existing codebases"
      ],
      description: "DataTech Labs is seeking a skilled Python Developer to join our data-driven team. You'll work on complex data processing applications and contribute to our machine learning initiatives."
    }
  ];

  return (
    <div className="job-search-page">
      {/* Header Section */}
      <header className="job-search-header">
        <div className="header-left">
          <button className="back-btn" onClick={handleBackToDashboard}>
            ← Back to Dashboard
          </button>
          <h1>Find Your Dream Job</h1>
        </div>
        <div className="header-right">
          <button className="header-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="job-search-content">
        {/* Filter Sidebar */}
        <div className="filter-sidebar">
          <div className="filter-card">
            <h3 className="filter-title">Filters</h3>
            
            <div className="filter-group">
              <label className="filter-label">Job Type</label>
              <select 
                className="filter-select"
                value={filters.jobType}
                onChange={(e) => handleFilterChange('jobType', e.target.value)}
              >
                <option value="">All Types</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Salary Range</label>
              <select 
                className="filter-select"
                value={filters.salary}
                onChange={(e) => handleFilterChange('salary', e.target.value)}
              >
                <option value="">All Salaries</option>
                <option value="0-5">₹0-5 LPA</option>
                <option value="5-10">₹5-10 LPA</option>
                <option value="10-15">₹10-15 LPA</option>
                <option value="15+">₹15+ LPA</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Location</label>
              <select 
                className="filter-select"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Experience</label>
              <select 
                className="filter-select"
                value={filters.experience}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
              >
                <option value="">All Levels</option>
                <option value="0-2">0-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5-8">5-8 years</option>
                <option value="8+">8+ years</option>
              </select>
            </div>

            <button className="clear-filters-btn">Clear All Filters</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Navigation Tabs */}
          <div className="tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${selectedTab === 'recommended' ? 'active' : ''}`}
                onClick={() => setSelectedTab('recommended')}
              >
                Recommended jobs
              </button>
              <button 
                className={`tab ${selectedTab === 'saved' ? 'active' : ''}`}
                onClick={() => setSelectedTab('saved')}
              >
                Saved jobs
              </button>
              <button 
                className={`tab ${selectedTab === 'applied' ? 'active' : ''}`}
                onClick={() => setSelectedTab('applied')}
              >
                Applied jobs
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="job-listings">
            <div className="job-listings-header">
              <span className="job-count">
                Showing {
                  selectedTab === 'saved' ? savedJobs.length : 
                  selectedTab === 'applied' ? appliedJobs.length : 
                  jobs.length
                } jobs
              </span>
              {selectedTab === 'recommended' && (
                <label className="select-all-container">
                  <input 
                    type="checkbox" 
                    checked={selectedJobs.length === jobs.length && jobs.length > 0}
                    onChange={handleSelectAll}
                  />
                  Select all (upto 15 quick apply jobs)
                </label>
              )}
            </div>

            <div className="jobs-section">
              <h2 className="section-heading">
                {selectedTab === 'saved' ? 'Your Saved Jobs' : 
                 selectedTab === 'applied' ? 'Your Applied Jobs' : 
                 'Jobs based on preferences'}
              </h2>
              
              <div className="jobs-grid">
                {(selectedTab === 'saved' ? savedJobs : 
                  selectedTab === 'applied' ? appliedJobs : 
                  jobs).map(job => {
                  const isJobSaved = savedJobs.some(savedJob => savedJob.id === job.id);
                  const isJobApplied = appliedJobs.some(appliedJob => appliedJob.id === job.id);
                  
                  return (
                    <div key={job.id} className="job-card">
                      <div className="job-card-content">
                        <div className="job-main-info">
                          <h3 className="job-title">{job.title}</h3>
                          <div className="job-company">
                            <span className="company-name">{job.company}</span>
                            <div className="company-logo">🏢</div>
                          </div>
                          
                          <div className="job-details">
                            <div className="job-detail-item">
                              <span className="detail-icon">💼</span>
                              <span className="detail-text">{job.experience}</span>
                            </div>
                            <div className="job-detail-item">
                              <span className="detail-icon">📍</span>
                              <span className="detail-text">{job.location}</span>
                            </div>
                          </div>

                          <div className="job-status">
                            <span className="status-icon">🕐</span>
                            <span className="status-text">
                              {selectedTab === 'applied' ? job.status || 'Applied' : 'Early Applicant'}
                            </span>
                          </div>

                          <div className="job-posted">
                            {selectedTab === 'applied' && job.appliedDate ? 
                              `Applied on ${new Date(job.appliedDate).toLocaleDateString()}` : 
                              job.postedDate
                            }
                          </div>
                        </div>

                        <div className="job-actions">
                          {selectedTab !== 'applied' && (
                            <button 
                              className={`save-btn ${isJobSaved ? 'saved' : ''}`}
                              onClick={() => handleSave(job)}
                            >
                              <span className="btn-icon">{isJobSaved ? '❤️' : '🔖'}</span>
                              {isJobSaved ? 'Saved' : 'Save'}
                            </button>
                          )}
                          {selectedTab === 'applied' ? (
                            <button className="applied-btn" disabled>
                              <span className="btn-icon">✓</span>
                              Applied
                            </button>
                          ) : (
                            <button 
                              className={`apply-btn ${isJobApplied ? 'applied' : ''}`}
                              onClick={() => handleApply(job)}
                              disabled={isJobApplied}
                            >
                              <span className="btn-icon">{isJobApplied ? '✓' : '⚡'}</span>
                              {isJobApplied ? 'Applied' : 'Quick Apply'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {selectedTab === 'saved' && savedJobs.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">🔖</div>
                  <h3>No saved jobs yet</h3>
                  <p>Start saving jobs you're interested in by clicking the save button on any job listing.</p>
                  <button 
                    className="browse-jobs-btn"
                    onClick={() => setSelectedTab('recommended')}
                  >
                    Browse Jobs
                  </button>
                </div>
              )}

              {selectedTab === 'applied' && appliedJobs.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">📝</div>
                  <h3>No applied jobs yet</h3>
                  <p>Start applying to jobs you're interested in by clicking the apply button on any job listing.</p>
                  <button 
                    className="browse-jobs-btn"
                    onClick={() => setSelectedTab('recommended')}
                  >
                    Browse Jobs
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          {/* Preferences Card */}
          <div className="preferences-card">
            <div className="card-header">
              <h3 className="card-title">Make sure your preferences are correct!</h3>
              <button className="edit-btn">✏️</button>
            </div>
            <div className="preferences-content">
              <div className="preference-item">
                <span className="preference-label">Preferred Role:</span>
                <span className="preference-value">Software Developer, Full Stack</span>
              </div>
              <div className="preference-item">
                <span className="preference-label">Preferred Location:</span>
                <span className="preference-value">Hyderabad / Secunderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* App Promotion Card */}
          <div className="app-promotion-card">
            <h3 className="card-title">Real-time notifications</h3>
            <p className="card-description">
              Discover new jobs, get recruiter notifications, track applications & more with the TalentLoop App.
            </p>
            <div className="app-buttons">
              <button className="app-store-btn">
                <span className="store-icon">🍎</span>
                Download on the App Store
              </button>
              <button className="google-play-btn">
                <span className="store-icon">📱</span>
                Get it on Google Play
              </button>
            </div>
            <div className="qr-section">
              <div className="qr-code">
                <div className="qr-placeholder">📱</div>
              </div>
              <p className="qr-text">Scan to download TalentLoop App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;

