import * as React from 'react';
import { render } from 'react-dom';
import { Router } from './router';
import './assets/styles/_app.scss';

render(
  <Router />,
  document.getElementById('app'),
);
