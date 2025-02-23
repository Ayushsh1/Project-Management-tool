import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PStatistics = () => {
  // Dummy data for KPIs — can be replaced with real data
  const projectStats = [
    { name: "Project A", progress: 85, tasks: 50, completedTasks: 45, teamMembers: 8, deadline: "2025-03-15" },
    { name: "Project B", progress: 60, tasks: 30, completedTasks: 18, teamMembers: 5, deadline: "2025-04-01" },
    { name: "Project C", progress: 95, tasks: 70, completedTasks: 67, teamMembers: 10, deadline: "2025-02-28" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📊 Project Statistics</h2>
      <div className="row">
        {projectStats.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p>📅 Deadline: {project.deadline}</p>
                <p>👥 Team Members: {project.teamMembers}</p>
                <p>✅ Completed Tasks: {project.completedTasks} / {project.tasks}</p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${project.progress}%` }}
                    aria-valuenow={project.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {project.progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PStatistics;
