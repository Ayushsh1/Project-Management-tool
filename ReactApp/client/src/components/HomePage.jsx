import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Main Layout */}
      <div className="d-flex" style={{ flex: 1 }}>
        {/* Sidebar */}
        <div className="bg-dark text-white p-4" style={{ width: "250px", height: "100vh" }}>
          <h4 className="mb-4">📁 Project Manager</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <Link to="/dashboard" className="nav-link">📊 Dashboard</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/projects" className="nav-link">📁 Projects</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/calendar" className="nav-link">🗓️ Calendar</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/teams" className="nav-link">👥 Teams</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/files" className="nav-link">📂 Files & Documents</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/reports" className="nav-link">📈 Reports</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/notifications" className="nav-link">🔔 Notifications</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/profile icon.png"
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px", objectFit: "cover" }}
                />
                <span>Profile</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/login">Log in</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signup">Sign up</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="container text-center mt-5" style={{ flex: 1 }}>
          <h1>🚀 Welcome to Project Management Tool</h1>
          <p>Manage tasks, collaborate with teams, and track progress.</p>

          <Link to="/dashboard" className="btn btn-primary m-2">Go to Dashboard</Link>
          <Link to="/tasks" className="btn btn-success m-2">Task Management</Link>
          <Link to="/teams" className="btn btn-info m-2">Team Collaboration</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>© {new Date().getFullYear()} Project Management Tool. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/terms-of-service" className="text-white">Terms of Service</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contact" className="text-white">Contact Us</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
