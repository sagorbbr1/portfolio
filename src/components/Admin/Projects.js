import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const fileInputRef = useRef(null);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectCat, setProjectCat] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectImage, setProjectImage] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("http://localhost:5000/api/get-projects");
      const data = await res.json();
      console.log(data);
    };
    fetchProjects();
  }, []);

  const handleSubmitProject = () => {
    const formData = new FormData();
    formData.append("projectTitle", projectTitle);
    formData.append("projectCat", projectCat);
    formData.append("projectLink", projectLink);
    formData.append("image", projectImage);

    fetch("http://localhost:5000/api/create-projects", {
      method: "POST",

      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Project created successfully");
        setProjectTitle("");
        setProjectCat("");
        setProjectLink("");
        fileInputRef.current.value = "";
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4>Project Name</h4>
      <input
        onChange={(e) => setProjectTitle(e.target.value)}
        value={projectTitle}
        className="input"
        type="text"
        name="project"
        id="project"
        placeholder="Project Name"
      />
      <input
        onChange={(e) => setProjectLink(e.target.value)}
        value={projectLink}
        className="input"
        type="text"
        name="project-cat"
        id="project-cat"
        placeholder="Link"
      />

      <input
        onChange={(e) => setProjectCat(e.target.value)}
        value={projectCat}
        className="input"
        type="text"
        name="project-cat"
        id="project-cat"
        placeholder="Project Cat"
      />

      <input
        onChange={(e) => setProjectImage(e.target.files[0])}
        className="input"
        ref={fileInputRef}
        type="file"
        name="p-dp"
        id="p-dp"
      />
      <button
        onClick={handleSubmitProject}
        className="button button--flex update-btn"
      >
        Update
      </button>
    </div>
  );
};

export default Projects;
