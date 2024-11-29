import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState();

  const HandleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const HandleClick = () => {
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={HandleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={HandleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
