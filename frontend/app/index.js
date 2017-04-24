require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(
  <div className='app-container'>
    <App />
  </div>,
  document.getElementById('react-app'))

module.hot.accept()
