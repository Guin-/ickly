require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloWorld';
import TitleHeader from './components/pageHeader';

ReactDOM.render(
  <div class='app-container'>
    <TitleHeader />
    <HelloWorld />
  </div>,
  document.getElementById('react-app'))

module.hot.accept()
