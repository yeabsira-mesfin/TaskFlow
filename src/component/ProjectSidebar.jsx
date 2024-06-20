import React from "react";
import Button from "./Button";
const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-blue-300 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-white-100">
        Your projects
      </h2>
      <div>
       <Button>
       + Add Project
       </Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
