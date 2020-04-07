import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './Counter';

ReactDOM.hydrate(
  <Counter />,
  document.getElementById('counter')
);
