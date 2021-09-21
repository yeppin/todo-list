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
    font-size: 14px;
    background: #ccc;
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
