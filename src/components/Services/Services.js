import React, { useState } from "react";
import "./services.css";
function Services() {
  const [showModal, setShowModal] = useState(0);

  const onShowModal = (index) => setShowModal(index);

  return (
    <div className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">MERN Stack Developer</h3>
          </div>
          <span onClick={() => onShowModal(1)} className="services__button">
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              showModal === 1
                ? "active-modal services__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => onShowModal(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">MERN Stack Developer</h3>
              <p className="services__modal-description">
                Services with two years of experience. Providing quality work to
                clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develope the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Creating React App</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Custom web-page design</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Fixing bugs of web-page
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web Designer</h3>
          </div>
          <span onClick={() => onShowModal(2)} className="services__button">
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              showModal === 2
                ? "active-modal services__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => onShowModal(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Designer</h3>
              <p className="services__modal-description">
                Services with two years of experience. Providing quality work to
                clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develope the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Creating React App</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Custom web-page design</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Fixing bugs of web-page
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Front-End Developer</h3>
          </div>
          <span onClick={() => onShowModal(3)} className="services__button">
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              showModal === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => onShowModal(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Front-End Developer</h3>
              <p className="services__modal-description">
                Services with two years of experience. Providing quality work to
                clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develope the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Creating React App</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Custom web-page design</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Fixing bugs of web-page
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
