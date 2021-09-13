import React from 'react';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <Container>
      <h1>뚜두리스트</h1>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  padding: 30px 0;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 70px;
    color: #ead7d7;
  }
`;
