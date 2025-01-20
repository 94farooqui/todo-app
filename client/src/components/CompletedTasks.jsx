import React, { useEffect, useState } from "react";

import TaskCard from "./TaskCard";

const CompletedTasks = () => {
  const [todayTasks, setTodayTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    const filteredTasks = tasks.filter((task) => task.status == "Completed");
    setTodayTasks([...todayTasks, ...filteredTasks]);
    setLoading(false);
  }, []);

  const updateTaskStatus = () => {

  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col gap-y-4">
      <p className="mb-2 text-2xl font-semibold">Completed tasks</p>
      {todayTasks.map((task) => (
         <TaskCard task={task} updateTaskStatus={updateTaskStatus}/>
      ))}
    </div>
  );
};

export default CompletedTasks;
