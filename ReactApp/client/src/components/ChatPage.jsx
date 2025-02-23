import React, { useState, useEffect } from "react";
import "./ChatPage.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState(""); // Add username for sender
  const [receiver, setReceiver] = useState(""); // Add receiver for clarity

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000"); // Your WebSocket server URL
    setSocket(ws);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    return () => ws.close();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && socket && username && receiver) {
      const message = {
        text: newMessage,
        sender: username,
        receiver: receiver,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.send(JSON.stringify(message));
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h2>💬 Chat Page</h2>
      <div className="user-info">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="Receiver's Name"
          required
        />
      </div>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === username ? "sent" : "received"}`}>
            <strong>{msg.sender} ➡️ {msg.receiver}:</strong> {msg.text} 
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
