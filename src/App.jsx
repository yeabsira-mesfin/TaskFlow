import { useState } from "react";
import ProjectSidebar from "./component/ProjectSidebar";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
function App() {
  const [projects,setProjects] = useState({
    selectedProjectID: undefined,
    projects: []
  });
  function handleStartedProject(){
    setProjects(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,

      }
    })
  }
 function handleProjectAdd(inputData){
  setProjects(prevState=> {
    const projectID = Math.random();
    let newProject = {
      ...inputData,
      id: projectID
    };
    return{
      ...prevState,
      selectedProjectID: undefined,
      projects: [...prevState.projects,newProject]
    }
  })
 }
  console.log(projects)
  let content;
  if(projects.selectedProjectID === null){
    content = <NewProject onAdd={handleProjectAdd}/>
  } else if(projects.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartedProject= {handleStartedProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartedProject ={handleStartedProject} projects = {projects.projects}/>
      {content}
    </main>
  );
}

export default App;
