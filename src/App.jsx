import { useState } from "react";
import ProjectSidebar from "./component/ProjectSidebar";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import SelectedProject from "./component/SelectedProject";
function App() {
  const [projects, setProjects] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  });
  function handleAddTask(text){
    setProjects((prevState) => {
      const taskID = Math.random();
      let newTask = {
        text: text,
        projectID: prevState.selectedProjectID,
        id:taskID
      };
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks ]
      };
    });
  }

  function handleDeleteTask(id){
    setProjects((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handleStartedProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }
  function handleProjectAdd(inputData) {
    setProjects((prevState) => {
      const projectID = Math.random();
      let newProject = {
        ...inputData,
        id: projectID,
      };
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function cancelProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }
  function handleDeleteProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        ),
      };
    });
  }
  const selectedProject = projects.projects.find(
    (project) => project.id === projects.selectedProjectID
  );
  // console.log(projects)
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask ={handleDeleteTask} tasks={projects.tasks}/>;
  if (projects.selectedProjectID === null) {
    content = (
      <NewProject onAdd={handleProjectAdd} cancelProject={cancelProject} />
    );
  } else if (projects.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartedProject={handleStartedProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onSelecetProject={handleSelectProject}
        onStartedProject={handleStartedProject}
        projects={projects.projects}
      />
      {content}
    </main>
  );
}

export default App;
