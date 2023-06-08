import React from "react";
import "./Project.css";

function Project({ title, description, technologies }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card project-card mt-5">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">
                {description}
              </p>
              <h6 className="card-subtitle mb-2 text-muted">Technologies utilisés</h6>
              <ul className="list-group list-group-flush">
                {technologies.map((tech, index) => (
                  <li className="list-group-item" key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
