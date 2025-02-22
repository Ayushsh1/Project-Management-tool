import React, { useState } from "react";
import "./TaskManagement.css";

const SetPriorities = () => {
  const [priority, setPriority] = useState("");

  const handlePriority = (e) => {
    e.preventDefault();
    console.log("Priority Set:", priority);
    setPriority("");
  };

  return (
    <div className="task-container">
      <h2>🎯 Set Priorities</h2>
      <form onSubmit={handlePriority}>
        <input
          type="text"
          placeholder="Task Priority (High/Medium/Low)"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        />
        <button type="submit">Set Priority</button>
      </form>
    </div>
  );
};

export default SetPriorities;
