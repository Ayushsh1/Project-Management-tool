const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app); // HTTP server
const wss = new WebSocket.Server({ server }); // Attach WebSocket server to HTTP server

// Store connected clients
const clients = new Set();

wss.on("connection", (ws) => {
  console.log("✅ New client connected!");
  clients.add(ws);

  // Listen for messages (task updates, assignments, progress, priorities)
  ws.on("message", (message) => {
    console.log(`📩 Received message: ${message}`);

    try {
      const parsedMessage = JSON.parse(message);

      // Handle different message types
      switch (parsedMessage.type) {
        case "TASK_ASSIGN":
          console.log(`📝 Task assigned: ${parsedMessage.task} to ${parsedMessage.assignedTo}`);
          broadcast(message); // Broadcast task assignment
          break;

        case "TASK_UPDATE":
          console.log(`🔄 Task update: ${parsedMessage.task} is now ${parsedMessage.status}`);
          broadcast(message); // Broadcast task status update
          break;

        case "TASK_PROGRESS":
          console.log(`📊 Task progress: ${parsedMessage.task} progress set to ${parsedMessage.progress}`);
          broadcast(message); // Broadcast task progress update
          break;

        case "TASK_PRIORITY":
          console.log(`⚡ Task priority: ${parsedMessage.task} priority set to ${parsedMessage.priority}`);
          broadcast(message); // Broadcast task priority update
          break;

        default:
          console.log("⚠️ Unknown message type:", parsedMessage.type);
      }
    } catch (error) {
      console.error("❌ Failed to parse message:", error);
    }
  });

  // Client disconnected
  ws.on("close", () => {
    console.log("❌ Client disconnected");
    clients.delete(ws);
  });
});

// Broadcast a message to all connected clients
function broadcast(data) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

// Serve Vite production build
app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
process.on("SIGINT", () => {
  console.log("❌ Server shutting down...");
  wss.close();
  server.close(() => {
    console.log("✅ Server closed.");
    process.exit(0);
  });
})
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
