import React from "react";
import { Outlet } from "react-router-dom";


const RootLayout = () => {

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-white`}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
