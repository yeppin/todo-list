import React from 'react';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <Container>
      <h1>todos</h1>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  padding: 15px 0;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 75px;
    font-weight: 300;
    color: #ce89ff;
  }
`;
