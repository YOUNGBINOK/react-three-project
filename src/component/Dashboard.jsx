import React from "react";
import "../App.css";
import Sidebar from "./SIdebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="Dash">
      <div className="DashGlass">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
