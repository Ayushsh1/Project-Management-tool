import React,{useState} from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">📊 Interactive Dashboard</h1>
      <p className="text-center text-muted">Track your progress with real-time insights.</p>

      <div className="row justify-content-center">
        {/* Project Statistics Card */}
        <div className="col-md-5 mb-4">
          <Link to="/statistics" className="text-decoration-none">
            <div className="card shadow-sm p-4">
              <h4>📈 Project Statistics</h4>
              <p className="text-muted">View key performance metrics for each project.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-5 mb-4">
          <Link to="/tasks" className="text-decoration-none">
            <div className="card shadow-sm p-4">
              <h4>✅ Task Completion</h4>
              <p className="text-muted">Monitor pending and completed tasks in real-time.</p>
            </div>
          </Link>
        </div>
      </div>  
    </div>
  );
};

export default Dashboard;
