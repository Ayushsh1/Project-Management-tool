import React, { useState, useEffect } from "react";

const NotificationsPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", deadline: "2025-03-01" },
    { id: 2, name: "AI Analytics Integration", deadline: "2025-02-28" },
    { id: 3, name: "Mobile App Launch", deadline: "2025-03-10" },
  ]);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const today = new Date();
    const newNotifications = projects
      .map((project) => {
        const deadline = new Date(project.deadline);
        const daysLeft = Math.floor((deadline - today) / (1000 * 60 * 60 * 24));

        if (daysLeft <= 4 && daysLeft >= 0) {
          return `⚠️ ${project.name} is due in ${daysLeft} days!`;
        }
        return null;
      })
      .filter((notification) => notification !== null);

    setNotifications(newNotifications);
  }, [projects]);

  return (
    <div className="container my-5">
      <h1 className="text-center">🔔 Notifications</h1>
      {notifications.length > 0 ? (
        <ul className="list-group my-4">
          {notifications.map((note, index) => (
            <li key={index} className="list-group-item list-group-item-warning">
              {note}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-success">✅ No urgent deadlines!</p>
      )}
    </div>
  );
};

export default NotificationsPage;
