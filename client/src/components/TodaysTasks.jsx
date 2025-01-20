import React, { useContext, useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const TodaysTasks = () => {
  const {tasks,loading,error} = useContext(TaskContext)
    //const [tasks,setTasks] = useState(null)
  const [todayTasks, setTodayTasks] = useState([]);
  

  useEffect(() => {
    // const savedTasks = JSON.parse(localStorage.getItem("tasks"))
    // setTasks(savedTasks)
    // console.log(savedTasks)
    const filteredTasks = tasks.filter((task) => task.status == "New");
    setTodayTasks([...todayTasks, ...filteredTasks]);
    setLoading(false);
  }, []);

  const updateTaskStatus = (taskId, status) => {
    setTasks(tasks.filter(task => task.id == taskId ? {...task, status:status} : task))
     localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col gap-y-4">
      <p className="mb-2 text-2xl font-semibold">Today's tasks</p>
      {todayTasks.map((task) => (
        <TaskCard task={task} key={task.id} updateTaskStatus={updateTaskStatus}/>
      ))}
    </div>
  );
};

export default TodaysTasks;
