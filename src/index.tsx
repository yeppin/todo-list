import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.body.appendChild(
  Object.assign(document.createElement(`div`), { id: 'root' }),
);
ReactDOM.render(<App />, document.getElementById('root'));
