import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ date: "", task: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.date && newEvent.task) {
      setEvents([...events, newEvent]);
      setNewEvent({ date: "", task: "" });
    }
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📅 Project Calendar</h2>

      {/* Add Task Form */}
      <form onSubmit={addEvent} className="row g-3 justify-content-center">
        <div className="col-auto">
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            name="task"
            value={newEvent.task}
            onChange={handleChange}
            placeholder="Add a project task"
            className="form-control"
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>

      {/* Task List */}
      <ul className="list-group mt-4">
        {events.length === 0 ? (
          <li className="list-group-item text-center text-muted">
            No tasks added yet!
          </li>
        ) : (
          events.map((event, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                🗓️ <strong>{event.date}</strong> - {event.task}
              </span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteEvent(index)}
              >
                ❌ Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CalendarPage;
