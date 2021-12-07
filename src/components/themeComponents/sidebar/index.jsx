import React from "react";
import "./sidebar.scss";
import { sidebarItems } from "./sidebarItems";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul className="sidebarList">
          {sidebarItems.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export default Sidebar;
