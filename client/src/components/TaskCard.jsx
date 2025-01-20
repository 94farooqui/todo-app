import React, { useEffect, useRef, useState } from "react";

const TaskCard = ({ task, updateTaskStatus }) => {
  const optionsRef = useRef(null);
  const [showUpdateStatusOptions, setShowUpdateStatusOptions] = useState(false);

  const handleOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShowUpdateStatusOptions(false);
    }
  };

  const handleStatusUpdate = (event) => {
    console.log(event.target.id, "Clicked")
    task.status = event.target.id
    updateTaskStatus(task.id, event.target.id)
    setShowUpdateStatusOptions(false)
  }

  const toggleOptions = (event) => {
    event.stopPropagation(); //Prevent outside click handler from triggering
    setShowUpdateStatusOptions((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutside);

    return () => document.removeEventListener("click", handleOutside);
  }, []);
  return (
    <div className="w-full relative bg-zinc-100 p-4 rounded-md shadow-md flex items-center gap-4 border">
      <div className="flex-1">
        <p className="font-bold text-zinc-700">{task.title}</p>
        <p className="mt-2 text-sm text-zinc-500">{task.description}</p>
      </div>
      <button
        onClick={toggleOptions}
        className="w-20 p-1 rounded-[10px] text-sm bg-zinc-200"
      >
        Update
      </button>
      {showUpdateStatusOptions && (
        <div
          ref={optionsRef}
          className="absolute top-16 right-4 z-20 rounded-md border bg-zinc-50"
        >
          <ul className="flex flex-col text-sm">
            <li id="Pending" onClick={handleStatusUpdate} className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">
              Pending
            </li>
            <li id="Overdue" onClick={handleStatusUpdate}  className="px-4 py-2 hover:bg-zinc-100 cursor-pointer border-y border-zinc-200/50">
              Overdue
            </li>
            <li id="Completed" onClick={handleStatusUpdate}  className="px-4 py-2 hover:bg-zinc-100 cursor-pointer">
              Completed
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
