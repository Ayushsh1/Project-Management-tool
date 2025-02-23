import React, { useState, useEffect } from "react";
import "./TaskManagement.css";

const SetPriorities = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [priorities, setPriorities] = useState([]); // Store all task priorities
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000"); // WebSocket server URL
    setSocket(ws);

    ws.onmessage = (event) => {
      const newPriority = JSON.parse(event.data);
      setPriorities((prev) => [...prev, newPriority]);
    };

    return () => ws.close();
  }, []);

  const handlePriority = (e) => {
    e.preventDefault();
    if (socket) {
      const newPriority = {
        task,
        priority,
        setBy: "You", // You can replace this with the actual user name later
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.send(JSON.stringify(newPriority)); // Send priority to WebSocket server
      setTask("");
      setPriority("");
    }
  };

  return (
    <div className="task-container">
      <h2>🎯 Set Priorities</h2>
      <form onSubmit={handlePriority}>
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Task Priority (High/Medium/Low)"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        />
        <button type="submit">Set Priority</button>
      </form>

      <div className="priority-list">
        <h3>📝 Task Priorities</h3>
        {priorities.map((item, index) => (
          <div key={index} className="priority-item">
            <strong>Task:</strong> {item.task} | <strong>Priority:</strong> {item.priority} | 
            <strong> Set By:</strong> {item.setBy} | <span className="timestamp">{item.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetPriorities;
