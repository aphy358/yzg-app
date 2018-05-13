import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import hashHistory from './history'

import Layout from './layout'
import First from './pages/first'
import Second from './pages/second'
import Third from './pages/third'

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={First} />
      <Route path="/first" component={First} />
      <Route path="/second" component={Second} />
      <Route path="/third" component={Third} />
    </Route>
  </Router>
)
