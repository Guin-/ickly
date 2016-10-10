require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloWorld';
import TitleHeader from './components/pageHeader';

ReactDOM.render(
  <div className='app-container'>
    <TitleHeader />
    <HelloWorld />
  </div>,
  document.getElementById('react-app'))

module.hot.accept()
