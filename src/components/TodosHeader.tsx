import React from 'react';
import styled from '@emotion/styled';

type toggleCheckAllProps = {
  checked: boolean;
};

export default function TodosHeader() {
  return (
    <Container>
      <ToggleCheckAll checked={true} />
      <Input placeholder="할일을 입력해 보세요!" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid #eee;
`;

const ToggleCheckAll = styled.button<toggleCheckAllProps>`
  transform: rotate(90deg);
  margin-right: 5px;
  width: 40px;
  height: 100%;
  position: relative;
  &::before {
    position: absolute;
    width: 100%;
    bottom: 50%;
    left: 50%;
    cursor: pointer;
    font-size: 22px;
    color: ${props => (props.checked ? `#737373` : `#e6e6e6`)};
    content: '❯';
  }
`;

const Input = styled.input`
  font-size: 24px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
  border-radius: 10px;
  border: solid 1px #e2b9ff;
  outline: none;
  &::placeholder {
    font-style: italic;
  }
`;
