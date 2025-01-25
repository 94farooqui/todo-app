import React, { useContext, useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import useTasks from "../hooks/useTasks";
import NewTaskModal from "./NewTaskModal";

import { IoAdd } from "react-icons/io5";

const TasksList = ({ filter, setTaskCount }) => {
  const { fetchUserTasks, updateTaskStatus } = useTasks();

  const [tasks, setTasks] = useState([]);

  const [tasksError, setTasksError] = useState("");
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [triggerRefetch, setTriggerRefetch] = useState(0);
  const [taskLoading, setTaskLoading] = useState(false);

  const taskStatusUpdate = async (updatedTask) => {
    const response = await updateTaskStatus(updatedTask);
    if (response.result) {
      setTriggerRefetch((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setTaskLoading(true);
    const getTask = async () => {
      // console.log("Fetching tasks");
      try {
        const tasks = await fetchUserTasks(filter);
        if (tasks) {
          //console.log("Fetched Tasks", tasks);
          setTasks(tasks);
          setTaskCount(tasks.length);
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
    <div className="sm:max-w-[1200px] sm:min-sm max-w-sm sm:px-4">
      <div className="p-[2px] w-full bg-opacity-20 bg-gradient-to-r from-blue-500/50 to-purple-600/50 shadow-md  rounded-[8px] sm:rounded-[12px]">
        <div className="w-full flex justify-between p-2 sm:p-4 rounded-[6px] sm:rounded-[10px] bg-white items-center">
          <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Tasks
          </div>
          <button
            onClick={() => setShowNewTaskModal(true)}
            className="hidden sm:block px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md"
          >
            Add Task{" "}
          </button>
          <button
            onClick={() => setShowNewTaskModal(true)}
            className="sm:hidden w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
          >
            <IoAdd/>
          </button>
        </div>
      </div>

      {tasks && tasks.length < 1 ? (
        <div className="mt-4 flex flex-col gap-y-4">
          <p className="font-semibold text-gray-800/60">No tasks found </p>
        </div>
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
