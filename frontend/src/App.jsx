import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import FreelancerDashboard from './components/FreelancerDashboard';
import RecruiterDashboard from './components/RecruiterDashboard';
import Profile from './components/Profile';
import FreelancerProfile from './components/FreelancerProfile';
import RecruiterProfile from './components/RecruiterProfile';
import PostJob from './components/PostJob';
import AllProjects from './components/AllProjects';
import JobSearch from './components/JobSearch';
import JobApplication from './components/JobApplication';
import UpgradePlan from './components/UpgradePlan';
import FreelancerHallOfFame from './components/FreelancerHallOfFame';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
            </>
          } />
          
          {/* Login Page */}
          <Route path="/login" element={
            <>
              <Navbar />
              <Login />
            </>
          } />
          
          {/* Register Page */}
          <Route path="/register" element={
            <>
              <Navbar />
              <Register />
            </>
          } />
          
          {/* Reset Password Page */}
          <Route path="/reset-password" element={
            <ResetPassword />
          } />
          
          {/* Freelancer Dashboard Page */}
          <Route path="/freelancer-dashboard" element={
            <FreelancerDashboard />
          } />
          
          {/* Recruiter Dashboard Page */}
          <Route path="/recruiter-dashboard" element={
            <RecruiterDashboard />
          } />
          
          {/* Profile Page */}
          <Route path="/profile" element={
            <Profile />
          } />
          
          {/* Freelancer Profile Page */}
          <Route path="/freelancer-profile" element={
            <FreelancerProfile />
          } />
          
          {/* Recruiter Profile Page */}
          <Route path="/recruiter-profile" element={
            <RecruiterProfile />
          } />
          
          {/* Post Job Page */}
          <Route path="/post-project" element={
            <PostJob />
          } />
          
          {/* All Projects Page */}
          <Route path="/all-projects" element={
            <AllProjects />
          } />
          
          {/* Job Search Page */}
          <Route path="/job-search" element={
            <JobSearch />
          } />
          
          {/* Job Application Page */}
          <Route path="/job-application" element={
            <JobApplication />
          } />
          
          {/* Upgrade Plan Page */}
          <Route path="/upgrade-plan" element={
            <UpgradePlan />
          } />
          
          {/* Hall of Fame Page */}
          <Route path="/hall-of-fame" element={
            <FreelancerHallOfFame />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

