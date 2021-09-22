import React from 'react';
import TodoItem from './TodoItem';
import * as api from '../api/todo';

export default function TodoList() {
  const todos = api.getTodos();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
