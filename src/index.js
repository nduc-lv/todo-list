import App from './core-components/app-module';
import projectController from './display-components/project/project-loader';
//FLOW OF THE App
//create a new project
App.addProject("New Project");
let project = App.getProject(0);

//add new todo
let todoInfo = {
    title: "Make display controller",
    discription: "display controller for displaying the content of the app",
    time: "09/09/2023 9AM",
    priority: 1,
} 
//get user input from display controller
project.addTodo(todoInfo);
console.log(project.getTodo(0).getInfo());
console.log(App.showApp());
projectController(project);