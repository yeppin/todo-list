import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useTodoDispatch } from '../contexts/todoContext';

type toggleCheckAllProps = {
  checked: boolean;
};

export default function TodosHeader() {
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();

  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'CREATE_TODO', content: value });
    setValue('');
  };

  return (
    <Container>
      <ToggleCheckAll checked={true} />
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
  width: 100%;

  border-bottom: 1px solid #eee;
`;

const ToggleCheckAll = styled.div<toggleCheckAllProps>`
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

const InputWrapper = styled.form`
  width: calc(100% - 95px);
  height: 65px;
  padding: 15px;
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
