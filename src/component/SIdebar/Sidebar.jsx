import React from "react";
import "./Sidebar.css";
import * as Unicons from "@iconscout/react-unicons";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <span>
          <img src="" alt="로고" />
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <Unicons.UilEstate />
          </div>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
