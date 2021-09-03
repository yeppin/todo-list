import React from 'react';
import Board from './pages/Board';

import { Global, css } from '@emotion/react'

const globalStyle = css`
  body {
    font-size: 14px;
    background: #ccc;
  }
`

function App() {
  return (
    <>
      <Global styles={globalStyle}/>
      <Board></Board>
    </>
  );
}

export default App;
