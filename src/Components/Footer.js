import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-bg mt-5 text-center text-light py-3">
      <div className="row">
        <div className="col">
          <p className="mb-0">&copy; 2023 My Portfolio</p>
          <div className="social-links">
            <a href="https://github.com/18011952mimine" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><i className="fab fa-github fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/yasmine-merzougui-869bbb279/" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
