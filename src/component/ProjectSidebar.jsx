import React from "react";

const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-blue-300 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-white-100">
        Your projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-800 text-white-50
         hover:bg-blue-100 hover:text-gray-800">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
