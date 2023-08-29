import React, { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
