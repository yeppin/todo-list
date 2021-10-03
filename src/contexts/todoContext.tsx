import * as api from '../api/todo';

import React, { Dispatch, createContext, useContext, useReducer } from 'react';
import { Status, Todo } from '../types/Todo';

type TodoState = {
  todos: Todo[];
  status: Status;
};

type Action =
  | { type: 'GET_TODO' }
  | { type: 'CREATE_TODO'; content: string }
  | { type: 'UPDATE_TODO'; id: number; content: string }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'TOGGLE_COMPLETED'; id: number }
  | { type: 'TOGGLE_ALL_COMPLETED'; completed: boolean }
  | { type: 'CHANGE_STATUS'; status: Status };

type TodoDispatch = Dispatch<Action>;

const initialState = {
  todos: [],
  status: 'All' as Status,
};

const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'GET_TODO':
      return {
        ...state,
        todos: api.getTodos(),
      };
    case 'CREATE_TODO':
      api.createTodo(action.content);
      return {
        ...state,
        todos: api.getTodos(),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        // TODO: todo가 업데이트 되었을 때 action.todo 값을 이용하여 todos 가 업데이트 되도록 수정하기
        todos: api.updateTodo(action.id, action.content),
      };
    case 'DELETE_TODO':
      api.deleteTodo(action.id);
      const deleted = api.getTodos();
      return {
        ...state,
        // TODO: todo가 삭제 되었을 때 action.id 값을 이용하여 todos 가 삭제 되도록 수정하기
        todos: deleted,
      };
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        todos: api.toggleTodo(action.id),
      };
    case 'TOGGLE_ALL_COMPLETED':
      return {
        ...state,
        todos: api.toggleTodos(action.completed),
      };
    case 'CHANGE_STATUS':
      return {
        ...state,
        status: action.status,
        // TODO: status 가 바뀌었을 때 action.status 값을 이용하여 todos 가 업데이트 되도록 수정하기
        // todos:
      };
    default:
      throw new Error('Unhandled action');
  }
};

const TodoStateContext = createContext<TodoState>(null as any);
const TodoDispatchContext = createContext<TodoDispatch>(null as any);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const state = useContext(TodoStateContext);

  if (!state) throw new Error('Cannot find TodoProvider');
  return state;
};

export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatchContext);

  if (!dispatch) throw new Error('Cannot find TodoProvider');
  return dispatch;
};

export default TodoProvider;
