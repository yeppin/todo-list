import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Todo } from '../types/Todo';
import { useTodoDispatch } from '../contexts/todoContext';
import { TodoItemProps } from './TodoItem';

export default function UpdateForm({ todo, isEditing }: TodoItemProps) {
  const dispatch = useTodoDispatch();
  const [updateTodo, setState] = useState(todo);
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...updateTodo, content: e.target.value });
  };
  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_TODO', todo: updateTodo });
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <EditInput
        onChange={handleEditChange}
        type="text"
        defaultValue={todo.content}
      />
    </form>
  );
}

const EditInput = styled.input`
  width: calc(100% - 95px);
  padding: 15px;
  word-break: break-all;
  color: #000;
`;
