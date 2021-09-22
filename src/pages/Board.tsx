/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import TodosHeader from '../components/TodosHeader';
import TodoList from '../components/TodoList';
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
