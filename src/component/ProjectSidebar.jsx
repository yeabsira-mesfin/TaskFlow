import React from "react";

const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-800 text-gray-50 md:w-72 rounded-r-xl h-full">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-400 text-gray-200
         hover:bg-gray-500 hover:text-gray-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
