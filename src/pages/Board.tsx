import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import TodosHeader from '../components/TodosHeader';
import Todo from '../components/Todo';
import TodosFooter from '../components/TodosFooter';
import TodoProvider from '../contexts/todoContext';

export default function Board() {
  return (
    <BoardLayout>
      <Header />
      <TodoProvider>
        <TodosHeader />
        <TodoList>
          <Todo />
        </TodoList>
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

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
`;
