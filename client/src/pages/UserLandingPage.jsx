import React, { useContext, useEffect, useState } from "react";
import TodaysTasks from "../components/TodaysTasks";
import OpenTasks from "../components/OpenTasks";
import OverdueTasks from "../components/OverdueTasks";
import CompletedTasks from "../components/CompletedTasks";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import TasksList from "../components/TasksList";

const UserLandingPage = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("today");
  const [searchFilter,setSearchFilter] = useState("New")

  useEffect(() => {
    
  });
  return (
    <div>
      <Navbar />
      <div className="w-[800px] mx-auto mt-10 border flex rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setSearchFilter("New")}
          className={`flex-1 text-lg font-semibold ${
            searchFilter == "New"
              ? "bg-zinc-950 text-zinc-50"
              : "bg-zinc-200 text-zinc-950"
          } p-4`}
        >
          Today's Tasks
        </button>
        <button
          onClick={() => setSearchFilter("Pending")}
          className={`flex-1 text-lg font-semibold ${
            searchFilter == "Pending"
              ? "bg-zinc-950 text-zinc-50"
              : "bg-zinc-200 text-zinc-950"
          } p-4 border-x border-zinc-600/10`}
        >
          Pending Tasks
        </button>
        <button
          onClick={() => setSearchFilter("Overdue")}
          className={`flex-1 text-lg font-semibold ${
            searchFilter == "Overdue"
              ? "bg-zinc-950 text-zinc-50"
              : "bg-zinc-200 text-zinc-950"
          } p-4`}
        >
          Overdue Tasks
        </button>
        <button
          onClick={() => setSearchFilter("Completed")}
          className={`flex-1 text-lg font-semibold ${
            searchFilter == "Completed"
              ? "bg-zinc-950 text-zinc-50"
              : "bg-zinc-200 text-zinc-950"
          } p-4`}
        >
          Completed
        </button>
      </div>
      <div className="mt-12">
        {/* {activeTab == "today" && <TodaysTasks />}
        {activeTab == "pending" && <OpenTasks />}
        {activeTab == "overdue" && <OverdueTasks />}
        {activeTab == "completed" && <CompletedTasks />} */}
        <TasksList filter={searchFilter} />
      </div>
    </div>
  );
};

export default UserLandingPage;
