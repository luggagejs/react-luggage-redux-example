import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { luggageMiddleware } from 'react-luggage-redux'
import reducer from './reducers'
import App from './App'

const store = createStore(
  reducer,
  applyMiddleware(luggageMiddleware({
    apiKey: 'tqx0ze13xl6vawf'
  }))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
