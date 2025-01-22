import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TaskContextProvider from "../context/TaskContext";

const RootLayout = () => {
  const navigate = useNavigate();
  const { user, authLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [authLoading]);

  if (authLoading) {
    return <p>Loading...</p>;
  }

  return (
    <TaskContextProvider>
      <div className="w-[1200px] mx-auto py-12">
        <Outlet />
      </div>
    </TaskContextProvider>
  );
};

export default RootLayout;
