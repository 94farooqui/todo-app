import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import TasksList from "../components/TasksList";

const NavbarData = [
  {
    buttonText: "Today's",
    buttonValue: "New",
  },
  {
    buttonText: "Pending",
    buttonValue: "Pending",
  },
  {
    buttonText: "Overdue",
    buttonValue: "Overdue",
  },
  {
    buttonText: "Completed ",
    buttonValue: "Completed",
  },
];

const UserLandingPage = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("today");
  const [searchFilter,setSearchFilter] = useState("New")
  const [taskCount, setTaskCount] = useState(0);

  return (
    <div className="p-4 sm:py-6 sm:max-w-[1200px] mx-auto">
      <Navbar />
      <div className="w-full sm:w-[800px] mx-auto mt-4 sm:mt-10 flex rounded-md sm:rounded-[12px] overflow-hidden shadow-md">
        {NavbarData.map((tab) => (
          <button
            key={tab.buttonValue}
            onClick={() => setSearchFilter(tab.buttonValue)}
            className={`relative flex-1 sm:text-lg font-semibold p-2 sm:p-4 ${
              searchFilter == tab.buttonValue
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-white text-blue-500"
            }`}
          >
            {tab.buttonText}
            {tab.buttonValue !== "Completed" &&
              searchFilter == tab.buttonValue && (
                <span className="absolute top-1 right-1 sm:top-4 sm:right-4 bg-white w-4 h-4 rounded-full text-xs font-semibold text-blue-800">
                  {taskCount}
                </span>
              )}
          </button>
        ))}
      </div>
      <div className="mt-6 sm:mt-12">
        <TasksList setTaskCount={setTaskCount} filter={searchFilter} />
      </div>
    </div>
  );
};

export default UserLandingPage;
