import React from "react";
import "./TaskManagement.css";

const TrackProgress = () => {
  const tasks = [
    { name: "Design Wireframe", status: "In Progress" },
    { name: "Build API", status: "Completed" },
  ];

  return (
    <div className="task-container">
      <h2>📁 Track Progress</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - <strong>{task.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackProgress;
