import React, { useCallback, useState } from 'react';
import { useTodoDispatch, useTodoState } from '../contexts/todoContext';

import styled from '@emotion/styled';

type toggleCheckAllProps = {
  checked: boolean;
};

export default function TodosHeader() {
  const [value, setValue] = useState('');
  const { todos } = useTodoState();
  const dispatch = useTodoDispatch();
  const isAllCompleted = todos.every(todo => todo.completed);
  const handleAllCompleted = () => {
    dispatch({ type: 'TOGGLE_ALL_COMPLETED', completed: !isAllCompleted });
  };

  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch({ type: 'CREATE_TODO', content: value });
      setValue('');
    },
    [value],
  );

  return (
    <Container>
      <ToggleCheckAll checked={isAllCompleted} onClick={handleAllCompleted} />
      <InputWrapper onSubmit={onSubmit}>
        <Input
          value={value}
          type="text"
          onChange={onChange}
          placeholder="할일을 입력해 보세요!"
        />
      </InputWrapper>
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

const InputWrapper = styled.form`
  width: calc(100% - 95px);
  height: 65px;
  padding: 15px;
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
