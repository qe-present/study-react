import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import React, {useState} from "react";

function App() {
    const [projectsState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: []
    })

    function handleStartAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }
    function handleCancelAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        })
    }
    function handleAddedProject(projectData) {
        setProjectState(prevState => {
               let projectId = Math.random()
                const newProject = {
                    ...projectData,
                    id: projectId
                }
                return {
                    ...prevState,
                    selectedProjectId: projectId,
                    projects: [...prevState.projects,newProject]
                }
            }
        )
        console.log(projectData)

    }

    let content;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddedProject={handleAddedProject} onCancel={handleCancelAddProject}/>
    } else {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
            {content}
        </main>
    );
}

export default App;
