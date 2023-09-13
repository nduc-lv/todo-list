//TODO OBJECTS

const createTodo = (todoInfo) => {
  let todo = todoInfo;
  const getInfo = () => {
    return todo;
  };
  const updateTodo = (newTodoInfo) => {
    todo = newTodoInfo;
  };
  return { getInfo, updateTodo };
};
export default createTodo;
