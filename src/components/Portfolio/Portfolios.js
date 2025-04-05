import React, { useEffect, useState } from "react";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

function Portfolios() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [projectsData, setProjectsData] = useState([]);

  const getProjects = async () => {
    const res = await fetch("http://localhost:5000/api/get-projects");
    const data = await res.json();
    setProjectsData(data);
  };

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }

    getProjects();
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
}

export default Portfolios;
