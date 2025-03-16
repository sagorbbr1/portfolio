import React from "react";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">Md Sagor</h1>
      <h3 className="home__subtitle">A Front-End Web Developer</h3>
      <p className="home__description">
        I'm a passionate front-end web developer, feel free to leave me a
        message
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <i className="bx bxs-send home__send"></i>
      </a>
    </div>
  );
}

export default Data;
