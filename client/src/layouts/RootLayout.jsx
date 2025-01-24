import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TaskContextProvider from "../context/TaskContext";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const navigate = useNavigate();

  // useEffect(() => {

  //   console.log("User in Root Layout", user)
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div>
     
      <Outlet />
    </div>
  );
};

export default RootLayout;
