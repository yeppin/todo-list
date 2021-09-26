import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import TodosHeader from '../components/TodosHeader';
import TodoList from '../components/TodoList';
import TodosFooter from '../components/TodosFooter';
import TodoProvider from '../contexts/todoContext';

export default function Board() {
  return (
    <BoardLayout>
      <Header />
      <TodoProvider>
        <TodosHeader />
        <TodoList />
        <TodosFooter />
      </TodoProvider>
    </BoardLayout>
  );
}

const BoardLayout = styled.section`
  margin: 100px auto 0;
  max-width: 725px;
  min-width: 500px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;
