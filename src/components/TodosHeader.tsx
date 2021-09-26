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
  max-width: 100%;
  padding: 0 20px 20px;
  border-bottom: 1px solid #eee;
`;

const ToggleCheckAll = styled.button<toggleCheckAllProps>`
  margin-right: 20px;
  transform: rotate(90deg);
  font-size: 22px;
  color: ${props => (props.checked ? `#777` : `#d9d9d9`)};
  &::before {
    content: '❯';
  }
`;

const Input = styled.input`
  flex: 1;
  width: calc(100% - 20px);
  height: 44px;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: solid 1px #e2b9ff;
  outline: none;
  &::placeholder {
    font-style: italic;
    color: #d9d9d9;
  }
`;
