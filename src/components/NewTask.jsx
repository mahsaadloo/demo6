import React, { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({ onAdd }) => {
  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  const HandleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const HandleClick = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <p className="text-xl text-stone-700 text-bold my-4">
          This field cannot be empty!
        </p>
      </Modal>
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
    </>
  );
};

export default NewTask;
