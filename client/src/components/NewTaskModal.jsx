import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import { IoClose } from "react-icons/io5";

const defaultTask = {
  title: "",
  description: "",
  status: "New",
};


const NewTaskModal = ({ setShowNewTaskModal }) => {
  const { addTask } = useTasks();
  const [newTask, setNewTask] = useState(defaultTask);
  const [taskLoading, setTaskLoading] = useState(false);

  const handleAddTask = async (e) => {
    e.preventDefault();
    setTaskLoading(true);
    const taskAdded = await addTask(newTask);
    if (taskAdded) {
      console.log(taskAdded);
      setNewTask(defaultTask);
      setShowNewTaskModal(false);
      setTaskLoading(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-zinc-800/50 flex justify-center items-center">
      <div className="bg-white w-[600px] p-8 rounded-md">
        <div className="flex w-full justify-between items-center mb-4">
          <h4 className="text-2xl font-bold">Add New Task</h4>
          <button onClick={() => setShowNewTaskModal(false)}>
            <IoClose />
          </button>
        </div>
        <form onSubmit={handleAddTask}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <textarea
              id="description"
              name="description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              required
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 text-white bg-zinc-900 rounded-md"
          >
            {taskLoading ? "Loading" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTaskModal;
