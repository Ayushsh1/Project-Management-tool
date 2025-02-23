import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample folder structure for projects
const sampleFiles = [
  {
    name: "AI Video Analytics",
    type: "folder",
    children: [
      { name: "Project Proposal.docx", type: "file" },
      { name: "Architecture Diagram.png", type: "file" },
      {
        name: "Source Code",
        type: "folder",
        children: [
          { name: "Backend", type: "folder", children: [{ name: "app.js", type: "file" }] },
          { name: "Frontend", type: "folder", children: [{ name: "index.html", type: "file" }] }
        ]
      }
    ]
  },
  {
    name: "WebRTC Integration",
    type: "folder",
    children: [
      { name: "Technical Design.pdf", type: "file" },
      { name: "Meeting Notes.txt", type: "file" }
    ]
  }
];

// Recursive component to display the folder tree
const FileNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    if (node.type === "folder") setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginLeft: node.type === "folder" ? "20px" : "40px" }}>
      <div
        className={node.type === "folder" ? "fw-bold" : ""}
        onClick={toggleFolder}
        style={{ cursor: node.type === "folder" ? "pointer" : "default" }}
      >
        {node.type === "folder" ? (isOpen ? "📂" : "📁") : "📄"} {node.name}
      </div>

      {isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const FilesPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📁 Project Files & Documents</h1>

      <div className="card p-4 shadow-sm">
        {sampleFiles.map((project, index) => (
          <FileNode key={index} node={project} />
        ))}
      </div>
    </div>
  );
};

export default FilesPage;
