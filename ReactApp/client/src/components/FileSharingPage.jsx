import React, { useState } from "react";

import "./FileSharingPage.css";

const FileSharingPage = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const newFile = {
        id: Date.now(),
        name: uploadedFile.name,
        size: (uploadedFile.size / 1024).toFixed(2) + " KB",
      };
      setFiles([...files, newFile]);
    }
  };

  const handleDelete = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  return (
    <div className="file-sharing-container">
      <h2>📁 File Sharing</h2>
      <input
        type="file"
        onChange={handleFileUpload}
        className="file-upload-input"
      />

      {files.length > 0 ? (
        <table className="file-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>
                  <button
                    className="download-btn"
                    onClick={() => alert(`Downloading ${file.name}`)}
                  >
                    ⬇️ Download
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(file.id)}
                  >
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No files shared yet.</p>
      )}
    </div>
  );
};

export default FileSharingPage;
