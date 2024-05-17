import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import React, {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectsState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    })
    function handleAddTask(text) {
        setProjectState(prevState => {
                let taskId = Math.random()
                const newTask = {
                    text: text,
                    id: taskId,
                    projectId: prevState.selectedProjectId
                }
                return {
                    ...prevState,
                    tasks: [newTask,...prevState.tasks]
                }
            }
        )
    }
    function handleDeleteTask(taskId) {
        setProjectState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== taskId)
            }
        })
    }

    function handleSelectProject(id) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id
            }
        })
    }
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
    }
    function handleDeletedProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
            }
        })
    }
    let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
    let content= <SelectedProject
        project={selectedProject}
        deleteProject={handleDeletedProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
    />
    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddedProject={handleAddedProject} onCancel={handleCancelAddProject}/>
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectsState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
