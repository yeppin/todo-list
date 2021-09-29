import React from 'react';
import TodoItem from './TodoItem';
import styled from '@emotion/styled';

export default function TodoList() {
  const todos = api.getTodos();

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
