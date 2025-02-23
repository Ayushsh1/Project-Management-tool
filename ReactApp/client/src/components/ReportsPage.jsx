import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ReportsPage = () => {
  const [projects] = useState([
    { id: 1, name: "AI Video Analytics", progress: 80, status: "In Progress", startDate: "2025-01-10", endDate: "2025-06-30" },
    { id: 2, name: "WebRTC Integration", progress: 50, status: "On Hold", startDate: "2025-02-01", endDate: "2025-07-15" },
    { id: 3, name: "Mobile App Development", progress: 95, status: "Almost Complete", startDate: "2024-12-01", endDate: "2025-05-20" }
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "In Progress":
        return "badge bg-warning";
      case "On Hold":
        return "badge bg-secondary";
      case "Almost Complete":
        return "badge bg-info";
      case "Completed":
        return "badge bg-success";
      default:
        return "badge bg-light";
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📊 Project Reports</h1>

      <table className="table table-hover table-bordered shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>
                <span className={getStatusBadge(project.status)}>{project.status}</span>
              </td>
              <td>
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
              </td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsPage;
