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
`;
