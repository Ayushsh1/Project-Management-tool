import React,{useState} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeamCollaboration.css";

const TeamCollaboration = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">💬 Team Collaboration</h2>
      <p className="dashboard-subtitle">Stay connected and collaborate with your team seamlessly.</p>

      {/* Real-Time Chat */}
      <Link to="/chat" className="feature-card">
        <div className="feature-content">
          <span className="feature-icon">💬</span>
          <div>
            <h4 className="feature-title">Real-Time Chat</h4>
            <p className="feature-description">Communicate instantly with your team members.</p>
          </div>
        </div>
      </Link>

      {/* File Sharing */}
      <Link to="/files" className="feature-card">
        <div className="feature-content">
          <span className="feature-icon">📁</span>
          <div>
            <h4 className="feature-title">File Sharing</h4>
            <p className="feature-description">Manage and share project-related documents.</p>
          </div>
        </div>
      </Link>

      {/* Team Goals */}
      <Link to="/team-goals" className="feature-card">
        <div className="feature-content">
          <span className="feature-icon">🎯</span>
          <div>
            <h4 className="feature-title">Team Goals</h4>
            <p className="feature-description">Set and track goals for your team’s success.</p>
          </div>
        </div>
      </Link>
    </div>


  );
};

export default TeamCollaboration;
