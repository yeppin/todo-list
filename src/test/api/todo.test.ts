import {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from '../../api/todo';

describe('todo API', () => {
  const localStorageMock = (() => {
    let store: Record<string, unknown> = {};
    return {
      getItem(key: string) {
        return store[key] || null;
      },
      setItem(key: string, value: string) {
        store[key] = value;
      },
      clear() {
        store = {};
      },
    };
  })();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });
  it('create todo', () => {
    const todo = createTodo('정대윤');
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded).toEqual(todo);
  });

  it('update todo', () => {
    const todo = createTodo('updated');
    updateTodo({
      ...todo,
      content: 'updated 윤',
    });
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded?.content).toEqual('updated 윤');
  });

  it('toggleTodo todo to completed', () => {
    const todo = createTodo('completed');
    toggleTodo({
      id: todo.id,
      completed: true,
    });
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded?.completed).toBeTruthy();
    expect(finded?.completedDatetime).toBeTruthy();
  });

  it('toggleTodo todo to uncompleted', () => {
    const todo = createTodo('uncompleted');
    toggleTodo({
      id: todo.id,
      completed: false,
    });
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded?.completed).toBeFalsy();
    expect(finded?.completedDatetime).toBeFalsy();
  });

  it('delete todo', () => {
    const todo = createTodo('uncompleted');
    deleteTodo(todo.id);
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded?.completed).toBeFalsy();
  });
});
