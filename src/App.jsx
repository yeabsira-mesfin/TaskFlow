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
  function cancelProject(){
    setProjects(prevState => {
      return{
        ...prevState,
      selectedProjectID: undefined
      }
    })
  }
  let content;
  if(projects.selectedProjectID === null){
    content = <NewProject cancelProject = {cancelProject}/>
  } else if(projects.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartedProject= {handleStartedProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartedProject ={handleStartedProject}/>
      {content}
    </main>
  );
}

export default App;
