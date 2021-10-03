import React from 'react';
import styled from '@emotion/styled';

export default function UpdateForm(props: any) {
  return (
    <form onSubmit={props.editSubmit}>
      <EditInput
        onChange={props.editChange}
        type="text"
        defaultValue={props.content}
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
