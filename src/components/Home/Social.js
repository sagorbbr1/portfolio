import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/sagorbbr1"
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://twitter.com/sagorbbr1"
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
      >
        <i className="uil uil-twitter"></i>
      </a>
      <a
        href="https://github.com/sagorbbr1"
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
