import React from "react";
import noProjectsImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = () => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectsImage}
        alt="Empty task"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl text-stone-500 text-bold my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
