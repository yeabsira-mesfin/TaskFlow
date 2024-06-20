import React from "react";
import Button from "./Button";
const ProjectSidebar = ({
  onStartedProject,
  projects,
  onSelecetProject,
  selecetProjectID,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-blue-300 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-white-100">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartedProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-white hover:bg-blue-100 hover:text-gray-800"
          if(project.id === selecetProjectID){
            cssClasses+=' bg-blue-400'
          }else{
            cssClasses+=' '
          }
          return (
            <li key={project.id}>
              <button
                onClick={()=>onSelecetProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
