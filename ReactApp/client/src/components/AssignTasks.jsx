import React, { useState } from "react";
import "./TaskManagement.css";

const AssignTasks = () => {
  const [task, setTask] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [tasks, setTasks] = useState([]); // New state to store assigned tasks

  const handleAssign = (e) => {
    e.preventDefault();
    const newTask = { task, assignedTo };
    setTasks([...tasks, newTask]); // Add new task to the list
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

      <h3>📋 Assigned Tasks</h3>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            📝 {t.task} ➡️ Assigned to: {t.assignedTo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignTasks;
