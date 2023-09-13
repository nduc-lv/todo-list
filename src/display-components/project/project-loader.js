import createTodo from "../todo/todo-loader";

const content = document.querySelector("#content");
const dialog = document.querySelector("#project-modal");
const confirmButton = document.querySelector("#project-confirm");
const cancelButton = document.querySelector("#project-cancel");

// create static element of the page
const createProjectContainer = () => {
  const e = document.createElement("div");
  e.classList.add("project-container");
  return e;
};
const createNewButton = () => {
  const e = document.createElement("button");
  e.textContent = "Add";
  e.classList.add("new-todo-button");
  e.addEventListener("click", () => {
    dialog.show();
  });
  return e;
};
const projectContainer = createProjectContainer();
const newButton = createNewButton();
content.appendChild(newButton);
content.appendChild(projectContainer);

// create dynamically elements of the page
const createProjectTitle = (title) => {
  const e = document.createElement("div");
  e.classList.add("project-title");
  e.textContent = title;
  return e;
};
const createProjectContent = (todos) => {
  const todoDivs = [];
  for (let i = 0; i < todos.length; i += 1) {
    const todoInfo = todos[i].getInfo();
    const todoDiv = createTodo(i, todoInfo);
    todoDivs.push(todoDiv);
  }
  return todoDivs;
};
// get informantion of the form
const getInfo = () => {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const time = document.querySelector("#time").value;
  const priority = document.querySelector("#priority").value;
  const todoInfo = {
    title,
    description,
    time,
    priority,
  };
  return todoInfo;
};

// adding content to the project body
const loadProject = (todos, title) => {
  const projectTitle = createProjectTitle(title);
  const projectContent = createProjectContent(todos);
  projectContainer.appendChild(projectTitle);
  for (let i = 0; i < projectContent.length; i += 1) {
    projectContainer.appendChild(projectContent[i]);
  }
};

const projectController = (project) => {
  let todos;
  let projectTitle;
  let info = null;

  const renderProject = () => {
    projectContainer.textContent = "";
    project.sortTodo();
    todos = project.showProject();
    projectTitle = project.getProjectTitle();
    loadProject(todos, projectTitle);
  };
  renderProject();

  newButton.addEventListener("click", () => {
    confirmButton.value = "add";
    dialog.show();
  });

  projectContainer.addEventListener("click", (e) => {
    const source = e.target;
    const { index } = source.dataset;
    if (source.value === "edit") {
      confirmButton.value = "edit";
      confirmButton.dataset.index = index;

      // show the current status of todo
      const todo = project.getTodo(index).getInfo();
      const properties = Object.keys(todo);
      for (let i = 0; i < properties.length; i += 1) {
        const property = properties[i];
        const element = document.querySelector(`#${property}`);
        element.value = todo[property];
      }
      dialog.show();
    } else if (source.value === "delete") {
      project.deleteTodo(index);
      renderProject();
    }
  });

  const addTodo = (todoInfo) => {
    project.addTodo(todoInfo);
    renderProject();
  };

  confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    info = getInfo();
    if (confirmButton.value === "add") {
      addTodo(info);
    } else if (confirmButton.value === "edit") {
      const source = e.target;
      const { index } = source.dataset;
      project.getTodo(index).updateTodo(info);
      renderProject();
    }
    confirmButton.value = "default";
    dialog.close();
  });

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    renderProject();
    dialog.close();
  });
};
export default projectController;
