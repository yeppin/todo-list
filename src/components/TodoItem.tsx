import React from 'react';
import styled from '@emotion/styled';
import { useTodoDispatch } from '../contexts/todoContext';
import { Todo } from '../types/Todo';

type todoProps = {
  checked: boolean;
};

export type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodoDispatch();
  const { id, completed, content } = todo;

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_COMPLETED', id });
  };

  return (
    <Container>
      <CheckBox checked={completed} onClick={handleClick} />
      <Content checked={completed}>{content}</Content>
      <Delete />
    </Container>
  );
}

const CHECKED_IMAGE_URL = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E`;
const UNCHECKED_IMAGE_URL = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E`;
const CheckBox = styled.button<todoProps>`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-image: ${props =>
    props.checked
      ? `url('${CHECKED_IMAGE_URL}')`
      : `url('${UNCHECKED_IMAGE_URL}')`};
`;

const Content = styled.div<todoProps>`
  flex: 1;
  padding: 6px 18px;
  word-break: break-all;
  color: ${props => (props.checked ? `#d9d9d9` : 'inherit')};
  text-decoration: ${props => (props.checked ? `line-through` : `none`)};
`;

const Container = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 5px;
  list-style: none;
  transition: color 0.2s ease-out;
  border-bottom: solid 1px #eee;
  &:hover {
    & button:last-child::after {
      display: block;
    }
  }
`;

const Delete = styled.button`
  padding: 0 15px;
  color: #ac35ff;
  font-size: 30px;
  font-weight: 300;
  ::after {
    display: none;
    margin-top: -6px;
    content: '×';
  }
`;
