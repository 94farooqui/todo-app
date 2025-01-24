import React, { useContext, useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import useTasks from "../hooks/useTasks";

import { IoClose } from "react-icons/io5";
import NewTaskModal from "./NewTaskModal";

const defaultTask = {
  title: "",
  description: "",
  status: "New",
};

const TasksList = ({filter}) => {
  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [tasksError, setTasksError] = useState("");
  const [todayTasks, setTodayTasks] = useState([]);
  const [newTask, setNewTask] = useState(defaultTask);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const { fetchUserTasks, addTask } = useTasks();

  useEffect(() => {
    setTaskLoading(true);
    const getTask = async () => {
      console.log("Fetching tasks");
      try {
        const tasks = await fetchUserTasks(filter);
        if (tasks) {
          console.log(tasks);
          setTasks(tasks);
        }
      } catch (error) {
        setTasksError("Error in fetching the tasks");
      } finally {
        setTaskLoading(false);
      }
    };
    getTask();
  }, [filter]);

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
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}

      {showNewTaskModal && <NewTaskModal />}
    </div>
  );
};

export default TasksList;
