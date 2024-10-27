import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="main-task-container">
        <h2>upcoming tasks</h2>
        <button className="add-task">add your next task...</button>

        <div className="task-list">
          <div className="task-container">
            <h3>task 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum.
            </p>
            <button className="due-date">17/11/2024</button>
            <div className="decision">
              <button>Done</button>
              <button>Reschedule</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
