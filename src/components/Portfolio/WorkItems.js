/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function WorkItems({ item }) {
  console.log(item);
  return (
    <div className="work__card">
      <img
        src={`http://localhost:5000/uploads/${item.image}`}
        alt={item.title}
        className="work__img"
      />
      <h3 className="work__title">{item.title}</h3>
      <a href={`${item.link}`} className="work__button">
        Live site <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItems;
