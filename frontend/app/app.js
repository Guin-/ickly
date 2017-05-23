import React from 'react';
import Navigation from './components/nav';
import Header from './components/header';
import SearchForm from './components/searchform';
import BusinessSearch from './containers/businessSearch';

const App = () => (
  <div>
    <Navigation />
    <Header />
    <BusinessSearch />
  </div>
)

export default App
