import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useTodoDispatch, useTodoState } from '../contexts/todoContext';
import styled from '@emotion/styled';

export default function TodoList() {
  const { todos } = useTodoState();
  const dispatch = useTodoDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_TODO' });
  }, [dispatch]);

  return (
    <Todos>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Todos>
  );
}

const Todos = styled.ul`
  margin: 0;
  padding: 0;
`;
