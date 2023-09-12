//Display todo

const createTodoContainer = () => {
    const e = document.createElement("div");
    e.classList.add('todo-container');
    return e;
}
const createTodoContent = (todoInfo) => {
    let todoContent = [];
    for (const property in todoInfo){
        const e = document.createElement('div');
        e.classList.add(`todo-${property}`);
        e.textContent = todoInfo.property;
        todoContent.push(e);
    }
    return todoContent;
}

const createEditButton = (index) => {
    const e = document.createElement('button');
    e.classList.add('edit-button');
    e.textContent = "Edit";
    e.dataset.index = index;
    return e;
}
const createDeleteButton = (index) => {
    const e = document.createElement('button');
    e.classList.add('delete-button');
    e.textContent = "Delete";
    e.dataset.index = index;
    return e;
}

const createTodo = (index, todoInfo) => {
    const todoContainer = createTodoContainer();
    const todoContent = createTodoContent(todoInfo);
    const editButton = createEditButton(index);
    const deleteButton = createDeleteButton(index);

    //append elements to the container
    for (element of todoContent){
        todoContainer.appendChild(element);
        todoContainer.appendChild(editButton);
        todoContainer.appendChild(deleteButton);
    }
    return todoContainer;
}
export default createTodo;