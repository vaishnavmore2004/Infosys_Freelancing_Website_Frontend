import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import FreelancerDashboard from './components/FreelancerDashboard';
import RecruiterDashboard from './components/RecruiterDashboard';
import Profile from './components/Profile';
import FreelancerProfile from './components/FreelancerProfile';
import RecruiterProfile from './components/RecruiterProfile';
import PostJob from './components/PostJob';
import AllProjects from './components/AllProjects';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

