import { Todo } from '../types/Todo';

export const getTodos = (): Todo[] => {
  const todos = getTodoInLocalStorage();
  if (todos === null) {
    return [];
  }
  return JSON.parse(todos);
};

export const createTodo = (content: string): Todo[] => {
  const todos = getTodos();
  const todo = {
    content,
    id: new Date().getTime(),
    completed: false,
    createDatetime: new Date().toString(),
  };
  todos.push(todo);
  setTodoInLocalStorage(todos);
  console.info(`✅ 뚜두 등록 성공`);
  return todos;
};

export const updateTodo = (_todo: Todo): Todo[] => {
  const todos = getTodos();
  const updatedTodos = todos.map(todo => {
    if (todo.id !== _todo.id) {
      return todo;
    }
    return {
      ..._todo,
      updateDatetime: new Date().toString(),
    };
  });
  setTodoInLocalStorage(updatedTodos);
  console.info(`✅ 뚜두 변경 성공`);
  return updatedTodos;
};

export const toggleTodo = (id: number): Todo[] => {
  const todos = getTodos();
  const toggledTodos = mapToggledTodos({ id, todos });
  setTodoInLocalStorage(toggledTodos);
  return toggledTodos;
};

export const deleteTodo = (_id: number): Todo[] => {
  const todos = getTodos();
  const deletedTodos = todos.filter(todo => todo.id !== _id);
  setTodoInLocalStorage(deletedTodos);
  console.info(`✅ 뚜두 삭제 성공`);
  return deletedTodos;
};

const setTodoInLocalStorage = (todos: Todo[]) => {
  console.info(`✅ LocalStorage에 저장되는 Todos : ${JSON.stringify(todos)}`);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const getTodoInLocalStorage = (): string | null => {
  return localStorage.getItem('todos');
};

const mapToggledTodos = ({
  id,
  todos,
}: {
  id: number;
  todos: Todo[];
}): Todo[] => {
  return todos.map(todo => {
    if (todo.id !== id) {
      return todo;
    }
    return {
      ...todo,
      completed: !todo.completed,
      updateDatetime: new Date().toString(),
      completedDatetime: !todo.completed ? new Date().toString() : null,
    };
  });
};
