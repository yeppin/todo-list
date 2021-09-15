import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import TodosHeader from '../components/TodosHeader';
import TodoList from '../components/TodoList';
import TodoItem from '../components/Todo';
import TodosFooter from '../components/TodosFooter';

export default function Board() {
  return (
    <BoardLayout>
      <Header />
      <TodosHeader />
      <TodoList/>
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