/* eslint-disable react/prop-types */
import React, { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import TodosHeader from '../components/TodosHeader';
import TodoItem from '../components/TodoItem';
import TodosFooter from '../components/TodosFooter';
import { TodoContext } from '../context/context';
import * as api from '../api/todo';
import { Todo } from '../types/Todo';

export default function Board() {
  return (
    <BoardLayout>
      <Header />
      <TodosHeader />
      <TodoList />
      <TodosFooter />
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
  const todos = api.getTodos();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          completed={todo.completed}
          createDatetime={todo.createDatetime}
        />
      ))}
    </div>
  );
};
