import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary custom-navbar">
     <Link className="navbar-brand" to="/">Mon Portfolio</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/project1">Projet 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/project2">Projet 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
