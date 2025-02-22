import React, { useState } from "react";
import "./TaskManagement.css";

const AssignTasks = () => {
  const [task, setTask] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleAssign = (e) => {
    e.preventDefault();
    console.log("Task Assigned:", task, "to", assignedTo);
    setTask("");
    setAssignedTo("");
  };

  return (
    <div className="task-container">
      <h2>💬 Assign Tasks</h2>
      <form onSubmit={handleAssign}>
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Assign To"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
        />
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default AssignTasks;
