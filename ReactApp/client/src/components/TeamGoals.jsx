import React, { useState, useEffect } from "react";
import "./TrackProgress.css";

const TrackProgress = () => {
  const [tasks, setTasks] = useState([
    { name: "Design Wireframe", status: "In Progress", progress: "25%", priority: "Medium", assignedTo: "Bob" },
    { name: "Build API", status: "Completed", progress: "100%", priority: "High", assignedTo: "Alice" },
  ]);

  const [socket, setSocket] = useState(null);
  const [newTask, setNewTask] = useState({
    name: "",
    status: "Not Started",
    progress: "0%",
    priority: "Low",
    assignedTo: "",
  });

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    setSocket(ws);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "NEW_TASK") {
        setTasks((prev) => [...prev, message.task]); // Add new task
      } else {
        // Update existing task
        setTasks((prev) =>
          prev.map((task) =>
            task.name === message.task ? { ...task, ...message } : task
          )
        );
      }
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

  const addNewTask = (e) => {
    e.preventDefault();
    if (!newTask.name.trim() || !newTask.assignedTo.trim()) return;

    const message = {
      type: "NEW_TASK",
      task: { ...newTask },
    };

    socket && socket.send(JSON.stringify(message));
    setTasks((prev) => [...prev, newTask]); // Add task locally for instant feedback
    setNewTask({ name: "", status: "Not Started", progress: "0%", priority: "Low", assignedTo: "" });
  };

  return (
    <div className="task-container">
      <h2>📁 Track Progress</h2>

      {/* New Task Form */}
      <form onSubmit={addNewTask} className="new-task-form">
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Assigned To"
          value={newTask.assignedTo}
          onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
          required
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit" className="btn add-task">➕ Add Goal</button>
      </form>

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
              <td className="actions">
                <div className="action-buttons">
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackProgress;
