import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Link } from "react-router";
import Projects from "./Projects";
import Reviews from "./Reviews";
import Teams from "./Teams";

const Admin = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [selectedItems, setSelectedItems] = useState(<Projects />);
  useEffect(() => {
    if (selectedMenu === 1) {
      setSelectedItems(<Projects />);
    }
    if (selectedMenu === 2) {
      setSelectedItems(<Reviews />);
    }
    if (selectedMenu === 3) {
      setSelectedItems(<Teams />);
    }
  }, [selectedMenu]);

  return (
    <div className="admin">
      <div className="container-big">
        <div className="admin-row">
          <div className="navigation-menu">
            <ul>
              <li onClick={() => setSelectedMenu(1)} className="menu">
                <Link>Add Projects</Link>
              </li>
              <li onClick={() => setSelectedMenu(2)} className="menu">
                <Link>Add Reviews</Link>
              </li>
              <li onClick={() => setSelectedMenu(3)} className="menu">
                <Link>Add Teams</Link>
              </li>
            </ul>
          </div>
          <div className="dashboard-items">{selectedItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
