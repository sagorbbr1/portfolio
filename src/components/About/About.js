import React from "react";
import "./about.css";

import CV from "../../assets/md-sagor.pdf";
import Info from "./Info";
function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          className="about__img"
          src="https://i.postimg.cc/L8P9Gf9N/md-sagor-ali.jpg"
          alt="Mohammad Sagor Ali"
        />

        <div className="about__data">
          <Info />

          <p className="about__description">
            As a MERN Stack Developer, I build dynamic web applications using
            MongoDB, Express.js, React.js, and Node.js. With 4 years of coding
            experience, I create scalable back-end systems and interactive
            front-end interfaces, delivering high-quality projects that clients
            are happy with
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <i className="bx bxs-file-doc about__data-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
