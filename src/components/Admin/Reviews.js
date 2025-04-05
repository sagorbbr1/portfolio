import React, { useRef, useState } from "react";

const Reviews = () => {
  const fileInputRef = useRef(null);
  const [clientName, setClientName] = useState("");
  const [reviews, setReviews] = useState("");
  const [clientDp, setClientDp] = useState(null);

  const handleAddReviews = () => {
    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("reviews", reviews);
    formData.append("image", clientDp);
    fetch("http://localhost:5000/api/create-reviews", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Reviews added successfully");
        setClientName("");
        setReviews("");
        fileInputRef.current.value = "";
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4>Client Name</h4>
      <input
        onChange={(e) => setClientName(e.target.value)}
        value={clientName}
        className="input"
        type="text"
        name="client"
        id="client"
        placeholder="Client Name"
      />
      <textarea
        onChange={(e) => setReviews(e.target.value)}
        className="input"
        name="reviews"
        id="reviews"
      >
        Reviews...
      </textarea>

      <input
        onChange={(e) => setClientDp(e.target.files[0])}
        ref={fileInputRef}
        className="input"
        type="file"
        name="c-dp"
        id="c-dp"
      />

      <button
        onClick={handleAddReviews}
        className="button button--flex update-btn"
      >
        Update
      </button>
    </div>
  );
};

export default Reviews;
