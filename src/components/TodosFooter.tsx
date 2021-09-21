import React from 'react';
import styled from '@emotion/styled';

type filterProps = {
  selected: boolean;
};

export default function TodosFooter() {
  return (
    <Container>
      <LeftTodos>0개 남았어요!</LeftTodos>
      <FilterContainer>
        <Filter selected={true}>ALL</Filter>
        <Filter selected={false}>ING</Filter>
        <Filter selected={false}>COMPLETE</Filter>
      </FilterContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding: 10px 20px;
  color: #777;
`;

const LeftTodos = styled.span``;

const FilterContainer = styled.div`
  align-items: center;
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Filter = styled.button<filterProps>`
  margin-right: 3px;
  padding: 5px;
  border: ${props => (props.selected ? `solid 1px #e2b9ff` : 'none')};
  border-radius: 5px;
  cursor: pointer;
`;
