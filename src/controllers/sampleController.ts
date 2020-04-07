import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { html } from '../views/pages/sample/html';
import { Counter } from '../views/components/counter/Counter';
import { Sample } from '../views/components/sample/Sample';

export default (req: express.Request, res: express.Response) => {
  const counter = renderToString(React.createElement(Counter));
  const sample = renderToString(React.createElement(Sample));

  res.send(
    html({
      counter, sample
    })
  );
}
