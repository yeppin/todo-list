/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import TodosHeader from '../components/TodosHeader';
import TodoItem from '../components/TodoItem';
import TodosFooter from '../components/TodosFooter';
import { Todo } from '../types/Todo';
import * as api from '../api/todo';
import TodoProvider from '../contexts/todoContext';

export default function Board() {
  return (
    <BoardLayout>
      <TodoProvider>
        <Header />
        <TodosHeader />
        <TodoList />
        <TodosFooter />
      </TodoProvider>
    </BoardLayout>
  );
}

const BoardLayout = styled.section`
  margin: 0 auto;
  max-width: 768px;
  min-width: 500px;
  background: #fff;
  border-radius: 5px;
`;

const TodoList = () => {
  const todos = useTodosState();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
