import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './about'
import BusinessSearch from '../containers/BusinessSearch'
import Contact from './contact';

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={BusinessSearch}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
     </Switch>
  </main>
)

export default MainRouter;
