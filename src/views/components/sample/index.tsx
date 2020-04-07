import React from 'react';
import ReactDOM from 'react-dom';
import { Sample } from './Sample';

ReactDOM.hydrate(
  <Sample compiler="Typescript" framework="Express" library="React" />,
  document.getElementById('sample')
);
