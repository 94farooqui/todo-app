import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-[1200px] mx-auto py-12">
      <Outlet />
    </div>
  );
};

export default RootLayout;
