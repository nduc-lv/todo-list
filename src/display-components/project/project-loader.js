import createTodo from "../todo/todo-loader";
const content = document.querySelector('#content');
const dialog = document.querySelector('#project-modal');
const confirmButton = document.querySelector('#project-modal [value = `confirm`]');
const cancelButton = document.querySelector('#project-modal [value="cancel"]');
const createProjectContainer = () => {
    const e = document.createElement('div');
    e.classList.add('project-container');
    return e;
};
const createProjectTitle = (title) => {
    const e = document.createElement('div');
    e.classList.add('project-title');
    e.textContent = title;
    return e;
}
const createProjectContent = (todos) => {
    let todoDivs = [];
    for (let i = 0; i < todos.length; i++){
        const todoInfo = todos[i].getInfo();
        const todoDiv = createTodo(i, todoInfo);
        todoDivs.push(todoDiv);
    }
    return todoDivs;
}
const createNewButton = () => {
    const e = document.createElement("button");
    e.textContent = "Add";
    e.classList.add('new-todo-button');
    e.addEventListener('click', () => {
        dialog.show();
    })
    return e;
}
const confirm = () => {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').textContent;
    const time = document.querySelector('#time').value;
    const priority = document.querySelector('#priority').value;
    const todoInfo = {
        title,
        description,
        time,
        priority,
    }
    return todoInfo;
}
const loadProject = (project) => {
    const projectTitle = createProjectTitle(project.getProjectTitle());
    const projectContent = createProjectContent(project.showTodos());
    const projectContainer = createProjectContainer();
    const newButton = createNewButton();
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectContent);
    content.appendChild(newButton);
    content.appendChild(projectContainer);
    confirmButton.addEventListener('click', () => {
        let info = confirm();
        project.addTodos(info);
        dialog.close();
    });
    cancelButton.addEventListener("click", () => {
        dialog.close();
    })
    projectContainer.addEventListener('click', (e) => {
        let tag = e.target;
        if (tag.value == 'delete'){
            project.showTodos().deleteTodo(tag.dataset.index);
        }
        else if (tag.value == "edit"){
            dialog.show();
        }
    })
}
export default loadProject;