import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TeamGoals.css';

const TeamGoals = () => {
  const [goals, setGoals] = useState([
    { id: 1, description: 'Complete project documentation', deadline: '2025-03-01', assignedTo: 'John Doe' },
    { id: 2, description: 'Develop frontend UI', deadline: '2025-03-10', assignedTo: 'Jane Smith' },
  ]);

  return (
    <div className="team-goals-container">
      <h2>🎯 Team Goals</h2>
      <p>Track and manage your team’s goals to ensure project success.</p>

      <div className="goals-list">
        {goals.map(goal => (
          <div key={goal.id} className="goal-card">
            <h4>{goal.description}</h4>
            <p><strong>Deadline:</strong> {goal.deadline}</p>
            <p><strong>Assigned to:</strong> {goal.assignedTo}</p>
          </div>
        ))}
      </div>

      <button className="add-goal-btn">➕ Add New Goal</button>
    </div>
  );
};

export default TeamGoals;
