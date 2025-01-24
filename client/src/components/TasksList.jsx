import React, { useContext, useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import useTasks from "../hooks/useTasks";
import NewTaskModal from "./NewTaskModal";

const TasksList = ({ filter }) => {
  const { fetchUserTasks, updateTaskStatus } = useTasks();

  const [tasks, setTasks] = useState([]);

  const [tasksError, setTasksError] = useState("");
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [triggerRefetch,setTriggerRefetch] = useState(0)
  const [taskLoading, setTaskLoading] = useState(false);
  const taskStatusUpdate = async (updatedTask) => {
    //console.log("Updated Task", updatedTask)
    // setTasks((previous) =>
    //   previous.filter((task) =>
    //     task._id !== updatedTask._id)
    //   )
    const response = await updateTaskStatus(updatedTask)
    if(response.result){
      // setTasks((previous) =>
      //   previous.map((task) =>
      //     task._id === updatedTask._id ? updatedTask : task
      //   )
      // );
      setTriggerRefetch(prev => prev+1)
      //console.log("updated")
    }
  };

  useEffect(() => {
    setTaskLoading(true);
    const getTask = async () => {
      // console.log("Fetching tasks");
      try {
        const tasks = await fetchUserTasks(filter);
        if (tasks) {
          //console.log(tasks);
          setTasks(tasks);
        }
      } catch (error) {
        setTasksError("Error in fetching the tasks");
      } finally {
        setTaskLoading(false);
      }
    };
    getTask();
  }, [filter, triggerRefetch]);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between p-4 border-b items-center">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <button
          onClick={() => setShowNewTaskModal(true)}
          className="px-8 py-2 bg-zinc-200 font-semibold rounded-md"
        >
          Add Task{" "}
        </button>
      </div>
      {tasks && tasks.length < 1 ? (
        <p>No tasks added </p>
      ) : (
        <div className="mt-4 flex flex-col gap-y-4">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              taskStatusUpdate={taskStatusUpdate}
            />
          ))}
        </div>
      )}

      {showNewTaskModal && (
        <NewTaskModal setShowNewTaskModal={setShowNewTaskModal} />
      )}
    </div>
  );
};

export default TasksList;
