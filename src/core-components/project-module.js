//PROJECTS OBJECTS
import createTodo from "./todo-module";

const createProject = (title) => {
    let projectTitle = title;
    let todos = [];
    //add new todo to the project
    const addTodo = (todoInfo) => {
        let todo = createTodo(todoInfo);
        todos.push(todo);
    }

    //delete a todo from the project
    const deleteTodo = (position) => {
        todos.splice(position, 1);
    }

    //return a specific todo
    const getTodo = (position) => {
        return todos[position];
    }

    //sort todos by priority
    //compare based on priority
    const compare = (todo1, todo2) => {
        let todo1Info = todo1.getInfo();
        let todo2Info = todo2.getInfo();
        if (todo1Info.priority < todo2Info.priority){
            return -1
        }
        return 1;
    }
    const sortTodo = () => {
        todos.sort(compare);
    }

    //show all todos the project has
    const showProject = () => {
        return todos;
    }
    //show project title
    const getProjectTitle = () => {
        return projectTitle;
    }

    return {addTodo, getTodo, sortTodo, deleteTodo, showProject,getProjectTitle};
}
export default createProject;