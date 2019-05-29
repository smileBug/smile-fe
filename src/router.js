import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Test from './pages/test'
import Home from './pages/home'

const route = (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/test" component={Test} />
  </Router>
)

export default route
