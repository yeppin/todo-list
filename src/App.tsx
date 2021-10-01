import React from 'react';
import Board from './pages/Board';

import { Global, css } from '@emotion/react';

export default function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Board />
    </>
  );
}

const globalStyle = css`
  body {
    background: #f5f5f5;
    color: #4d4d4d;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: 0;
    border-radius: 0;
    background: none;
    appearance: none;
    box-shadow: none;
    overflow: visible;
    cursor: pointer;
  }
`;
