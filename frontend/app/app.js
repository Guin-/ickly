require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

import React from 'react';
import Navigation from './components/nav';
import Header from './components/header';
import SearchForm from './components/searchform';

const App = () => (
  <div>
    <Navigation />
    <Header />
    <SearchForm />
  </div>
)

export default App
