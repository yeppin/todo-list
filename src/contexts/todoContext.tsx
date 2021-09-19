import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import { Todo, Status } from '../types/Todo';

type TodoState = {
  todos: Todo[];
  status: Status;
};

type Action =
  | { type: 'CREATE_TODO'; todo: Todo }
  | { type: 'UPDATE_TODO'; todo: Todo }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'TOGGLE_COMPLETED'; id: number }
  | { type: 'CHANGE_STATUS'; status: Status };

type TodoDispatch = Dispatch<Action>;

const initialState = {
  todos: [],
  status: 'All' as Status,
};

const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        // TODO: todo가 생성 되었을 때 action.todo 값을 이용하여 todos 가 업데이트 되도록 수정하기
        // todos:
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        // TODO: todo가 업데이트 되었을 때 action.todo 값을 이용하여 todos 가 업데이트 되도록 수정하기
        // todos:
      };
    case 'DELETE_TODO':
      return {
        ...state,
        // TODO: todo가 삭제 되었을 때 action.id 값을 이용하여 todos 가 삭제 되도록 수정하기
        // todos:
      };
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        // TODO: todo의 completed 값이 토글 되었을 때 action.id 값을 이용하여 todos 가 업데이트 되도록 수정하기
        // todos:
      };
    case 'CHANGE_STATUS':
      return {
        ...state,
        status: action.status,
        // TODO: status 가 바뀌었을 때 action.status 값을 이용하여 todos 가 업데이트 되도록 수정하기
        // todos:
      };
  }
  return state;
};

const TodoStateContext = createContext<TodoState>(initialState);
const TodoDispatchContext = createContext<TodoDispatch>(() => undefined);

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
