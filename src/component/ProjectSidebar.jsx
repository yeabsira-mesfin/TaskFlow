import React from "react";
import Button from "./Button";
const ProjectSidebar = ({onStartedProject,projects}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-blue-300 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-white-100">
        Your projects
      </h2>
      <div>
       <Button onClick = {onStartedProject}>
       + Add Project
       </Button>
      </div>
      <ul className="mt-8">
        {projects.map(project => <li key={project.id}> 
          <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-white hover:bg-blue-100 hover:text-gray-800">{project.title}</button>
        </li>)}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
