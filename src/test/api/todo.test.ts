import * as faker from 'faker';
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

  const setUp = () => {
    const content = faker.lorem.word();
    const todo = createTodo(content);
    return {
      content,
      todo,
    };
  };

  it('create todo', () => {
    const { todo } = setUp();
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded).toEqual(todo);
  });

  it('update todo', () => {
    const { content, todo } = setUp();
    updateTodo({
      ...todo,
      content: content,
    });
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded?.content).toEqual(content);
  });

  it('toggleTodo todo to completed', () => {
    const { todo } = setUp();
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
    const { todo } = setUp();
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
    const { todo } = setUp();
    deleteTodo(todo.id);
    const todos = getTodos();
    const finded = todos.find(t => todo.id === t.id);
    expect(finded?.completed).toBeFalsy();
  });
});
