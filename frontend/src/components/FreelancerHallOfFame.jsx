import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FreelancerHallOfFame.css';

const FreelancerHallOfFame = () => {
  const [certificateModal, setCertificateModal] = useState(null);
  const [criteriaModal, setCriteriaModal] = useState(false);

  const topFreelancers = [
    { rank: 1, name: "Arjun Mehta", projects: 42, image: "/Pics/TalentLoop logo.png" },
    { rank: 2, name: "Sanya Rao", projects: 39, image: "/Pics/TalentLoop logo.png" },
    { rank: 3, name: "Rohit Verma", projects: 37, image: "/Pics/TalentLoop logo.png" },
  ];

  const otherFreelancers = [
    { rank: 4, name: "Ishita Nair", projects: 35 },
    { rank: 5, name: "Devansh Patil", projects: 33 },
    { rank: 6, name: "Karan Kapoor", projects: 30 },
    { rank: 7, name: "Megha Reddy", projects: 29 },
    { rank: 8, name: "Ayaan Malik", projects: 28 },
    { rank: 9, name: "Ritika Sharma", projects: 27 },
    { rank: 10, name: "Neel Joshi", projects: 25 },
  ];

  const openCertificateModal = (freelancer) => {
    setCertificateModal(freelancer);
  };

  const closeCertificateModal = () => {
    setCertificateModal(null);
  };

  const openCriteriaModal = () => {
    setCriteriaModal(true);
  };

  const closeCriteriaModal = () => {
    setCriteriaModal(false);
  };

  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return "podium-first";
      case 2:
        return "podium-second";
      case 3:
        return "podium-third";
      default:
        return "";
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `#${rank}`;
    }
  };

  return (
    <div className="hall-of-fame-container">
      {/* Header */}
      <motion.div 
        className="hall-of-fame-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hall-of-fame-title">
          🏆 Freelancer Hall of Fame 2025
        </h1>
      </motion.div>

      {/* Podium Section */}
      <div className="podium-section">
        <motion.div 
          className="podium-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* 2nd Place */}
          <motion.div 
            className={`podium-card ${getRankStyle(2)}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="rank-icon">{getRankIcon(2)}</div>
            <div className="profile-image-container">
              <img 
                src={topFreelancers[1].image} 
                alt={topFreelancers[1].name}
                className="profile-image"
              />
              <div className="profile-glow silver-glow"></div>
            </div>
            <h3 className="freelancer-name">{topFreelancers[1].name}</h3>
            <p className="projects-count">{topFreelancers[1].projects} Projects</p>
          </motion.div>

          {/* 1st Place */}
          <motion.div 
            className={`podium-card ${getRankStyle(1)}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="rank-icon">{getRankIcon(1)}</div>
            <div className="profile-image-container">
              <img 
                src={topFreelancers[0].image} 
                alt={topFreelancers[0].name}
                className="profile-image"
              />
              <div className="profile-glow gold-glow"></div>
            </div>
            <h3 className="freelancer-name">{topFreelancers[0].name}</h3>
            <p className="projects-count">{topFreelancers[0].projects} Projects</p>
          </motion.div>

          {/* 3rd Place */}
          <motion.div 
            className={`podium-card ${getRankStyle(3)}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="rank-icon">{getRankIcon(3)}</div>
            <div className="profile-image-container">
              <img 
                src={topFreelancers[2].image} 
                alt={topFreelancers[2].name}
                className="profile-image"
              />
              <div className="profile-glow bronze-glow"></div>
            </div>
            <h3 className="freelancer-name">{topFreelancers[2].name}</h3>
            <p className="projects-count">{topFreelancers[2].projects} Projects</p>
          </motion.div>
        </motion.div>
      </div>

      {/* View Criteria Button */}
      <motion.div 
        className="criteria-button-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <button 
          className="view-criteria-btn"
          onClick={openCriteriaModal}
        >
          View Ranking Criteria
        </button>
      </motion.div>

      {/* Leaderboard */}
      <div className="leaderboard-section">
        <h2 className="leaderboard-title">Complete Rankings</h2>
        <div className="leaderboard">
          {otherFreelancers.map((freelancer, index) => (
            <motion.div 
              key={freelancer.rank}
              className={`leaderboard-row ${index % 2 === 0 ? 'even' : 'odd'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1 + 0.5 }}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="rank-number">{getRankIcon(freelancer.rank)}</div>
              <div className="profile-section">
                <img 
                  src="/Pics/TalentLoop logo.png" 
                  alt={freelancer.name}
                  className="leaderboard-profile-image"
                />
              </div>
              <div className="freelancer-info">
                <h4 className="freelancer-name-leaderboard">{freelancer.name}</h4>
                <p className="projects-leaderboard">{freelancer.projects} Projects Completed</p>
              </div>
              <button 
                className="view-certificate-btn"
                onClick={() => openCertificateModal(freelancer)}
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {certificateModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificateModal}
          >
            <motion.div 
              className="certificate-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="certificate-content">
                <div className="certificate-header">
                  <h2>Certificate of Appreciation</h2>
                </div>
                
                <div className="certificate-body">
                  <div className="certificate-profile">
                    <img 
                      src="/Pics/TalentLoop logo.png" 
                      alt={certificateModal.name}
                      className="certificate-profile-image"
                    />
                  </div>
                  
                  <h3 className="certificate-name">{certificateModal.name}</h3>
                  
                  <p className="certificate-text">
                    Awarded for outstanding project completion and contribution on October 2025.
                  </p>
                  
                  <div className="certificate-details">
                    <p><strong>Rank:</strong> #{certificateModal.rank}</p>
                    <p><strong>Projects Completed:</strong> {certificateModal.projects}</p>
                  </div>
                  
                  <div className="certificate-signature">
                    <div className="signature-line"></div>
                    <p>Digital Signature</p>
                  </div>
                </div>
                
                <div className="certificate-actions">
                  <button className="download-btn">Download</button>
                  <button className="close-btn" onClick={closeCertificateModal}>Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Criteria Modal */}
      <AnimatePresence>
        {criteriaModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCriteriaModal}
          >
            <motion.div 
              className="criteria-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="criteria-content">
                <h2>Ranking Criteria</h2>
                <div className="criteria-text">
                  <p>
                    Rankings are based on total projects completed in the current year. 
                    Ties are broken by freelancer ratings and profile activity.
                  </p>
                  <ul>
                    <li>Primary: Total projects completed</li>
                    <li>Secondary: Average client ratings</li>
                    <li>Tertiary: Profile activity and engagement</li>
                  </ul>
                </div>
                <button className="close-btn" onClick={closeCriteriaModal}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FreelancerHallOfFame;
