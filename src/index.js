import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'

import store from './store'
import route from './router'

const App = () => {
  return <Provider {...store}>{route}</Provider>
}

ReactDom.render(<App />, document.getElementById('root'))
