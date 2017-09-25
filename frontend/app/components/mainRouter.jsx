import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './about'
import Home from './home'
import Contact from './contact';

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
     </Switch>
  </main>
)

export default MainRouter;
