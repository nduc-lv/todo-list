// CONTAINING APPLICATION LOGIC
import createProject from "./project-module";

const App = (() => {
    let projects = [];

    //add new projects
    const addProject = (projectTitle) => {
        const project = createProject(projectTitle);
        projects.push(project);
    }

    //delete a specific projects
    const deleteProject = (index) => {
        projects.splice(index, 1);
    }

    //show a specific projects
    const getProject = (index) => {
        return projects[index];
    }

    //show all projects
    const showApp = () => {
        return projects;
    }

    return {addProject, deleteProject, getProject, showApp};
}) ();
export default App;