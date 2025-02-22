import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TaskManagement.css";

const TaskManagement = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📋 Task Management</h1>
      <p className="dashboard-subtitle">
        Organize your work efficiently with task assignments and deadlines.
      </p>

      {/* Feature Links */}
      <div className="features-grid">
        {/* Assign Tasks */}
        <Link to="/assignTasks" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">📝</span>
            <div>
              <h4 className="feature-title">Assign Tasks</h4>
              <p className="feature-description">
                Assign tasks to team members and set deadlines.
              </p>
            </div>
          </div>
        </Link>

        {/* Track Progress */}
        <Link to="/trackProgress" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">📊</span>
            <div>
              <h4 className="feature-title">Track Progress</h4>
              <p className="feature-description">
                Monitor task completion and update statuses.
              </p>
            </div>
          </div>
        </Link>

        {/* Set Priorities */}
        <Link to="/setPriorities" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">⚡</span>
            <div>
              <h4 className="feature-title">Set Priorities</h4>
              <p className="feature-description">
                Define task priority levels to stay focused.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TaskManagement;
