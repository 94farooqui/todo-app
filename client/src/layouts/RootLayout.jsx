import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TaskContextProvider from "../context/TaskContext";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const RootLayout = () => {

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-white`}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
