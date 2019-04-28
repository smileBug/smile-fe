import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './pages/login'
import Test from './pages/test'

const route = (
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/test" component={Test} />
  </Router>
)

export default route
