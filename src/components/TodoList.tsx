import React from 'react';
import TodoItem from './TodoItem';
import * as api from '../api/todo';
import { useTodoState } from '../contexts/todoContext';

export default function TodoList() {
  //const todos = api.getTodos();
  const todos = useTodoState();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
