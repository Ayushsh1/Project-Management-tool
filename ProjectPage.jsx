import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "AI Video Analytics", description: "Analyze live video with AI" },
    { id: 2, name: "WebRTC Integration", description: "Real-time video calling feature" }
  ]);

  const [newProject, setNewProject] = useState({ name: "", description: "" });
  const [editingProject, setEditingProject] = useState(null);

  // Add a new project
  const handleAddProject = () => {
    if (!newProject.name || !newProject.description) return;
    const updatedProjects = [
      ...projects,
      { id: projects.length + 1, ...newProject }
    ];
    setProjects(updatedProjects);
    setNewProject({ name: "", description: "" });
  };

  // Edit an existing project
  const handleEditProject = () => {
    const updatedProjects = projects.map(project =>
      project.id === editingProject.id ? editingProject : project
    );
    setProjects(updatedProjects);
    setEditingProject(null);
  };

  // Delete a project
  const handleDeleteProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🗂️ Project Management</h1>

      {/* Add New Project Form */}
      <div className="card p-4 mb-4 shadow-sm">
        <h3>Add New Project</h3>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddProject}>
          ➕ Add Project
        </button>
      </div>

      {/* Edit Project Form */}
      {editingProject && (
        <div className="card p-4 mb-4 shadow-sm bg-light">
          <h3>Edit Project</h3>
          <input
            type="text"
            className="form-control mb-2"
            value={editingProject.name}
            onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
          />
          <textarea
            className="form-control mb-2"
            value={editingProject.description}
            onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
          />
          <button className="btn btn-success me-2" onClick={handleEditProject}>
            ✅ Save Changes
          </button>
          <button className="btn btn-secondary" onClick={() => setEditingProject(null)}>
            ❌ Cancel
          </button>
        </div>
      )}

      {/* Projects List */}
      <ul className="list-group">
        {projects.map((project) => (
          <li key={project.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{project.name}</h5>
              <p className="text-muted">{project.description}</p>
            </div>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => setEditingProject(project)}
              >
                ✏️ Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteProject(project.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
