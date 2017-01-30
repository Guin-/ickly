require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

import React from 'react';
import Navigation from './components/nav';
//import About from './components/about';
import Header from './components/header';
import FormExample from './components/formexample';

const App = () => (
  <div>
    <Navigation />
    <Header />
    <FormExample />
  </div>
)

export default App
