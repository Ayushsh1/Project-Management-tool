import React, { useState, useEffect } from "react";
import "./TrackProgress.css";

const TrackProgress = () => {
  const [tasks, setTasks] = useState([
    { name: "Design Wireframe", status: "In Progress", progress: "25%", priority: "Medium", assignedTo: "Bob" },
    { name: "Build API", status: "Completed", progress: "100%", priority: "High", assignedTo: "Alice" },
  ]);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    setSocket(ws);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setTasks((prev) =>
        prev.map((task) =>
          task.name === message.task ? { ...task, ...message } : task
        )
      );
    };

    return () => ws.close();
  }, []);

  const updateTaskStatus = (taskName, newStatus) => {
    const message = { type: "TASK_UPDATE", task: taskName, status: newStatus };
    socket && socket.send(JSON.stringify(message));
  };

  const updateTaskProgress = (taskName, progress) => {
    const message = { type: "TASK_PROGRESS", task: taskName, progress };
    socket && socket.send(JSON.stringify(message));
  };

  const updateTaskPriority = (taskName, priority) => {
    const message = { type: "TASK_PRIORITY", task: taskName, priority };
    socket && socket.send(JSON.stringify(message));
  };

  return (
    <div className="task-container">
      <h2>📁 Track Progress</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Priority</th>
            <th>Assigned To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.progress}</td>
              <td>{task.priority}</td>
              <td>{task.assignedTo}</td>
              <td>
                {task.status !== "Completed" && (
                  <button onClick={() => updateTaskStatus(task.name, "Completed")} className="btn complete">
                    ✅ Complete
                  </button>
                )}
                <button onClick={() => updateTaskProgress(task.name, "50% done")} className="btn progress">
                  📊 Update Progress
                </button>
                <button onClick={() => updateTaskPriority(task.name, "High")} className="btn priority">
                  ⚡ High Priority
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackProgress;
