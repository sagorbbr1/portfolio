import React from "react";

const Reviews = () => {
  return (
    <div>
      <h4>Client Name</h4>
      <input
        className="input"
        type="text"
        name="client"
        id="client"
        placeholder="Client Name"
      />
      <textarea className="input" name="reviews" id="reviews">
        Reviews
      </textarea>

      <input className="input" type="file" name="c-dp" id="c-dp" />

      <button className="button button--flex update-btn">Update</button>
    </div>
  );
};

export default Reviews;
