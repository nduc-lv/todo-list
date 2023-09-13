import App from "./core-components/app-module";
import projectController from "./display-components/project/project-loader";
// FLOW OF THE App
// create a new project
App.addProject("New Project");
const project = App.getProject(0);

// add new todo

projectController(project);
