import React from "react";

function info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4 years coding</span>
      </div>
      <div className="about__box">
        <i className="bx bxs-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">50+ Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default info;
