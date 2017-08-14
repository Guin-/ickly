require('bootstrap/dist/css/bootstrap.min.css');

import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import fetchBusiness from './actions/index'
import fetchInspections from './actions/index'
import rootReducer from './reducers/index'
import App from './app'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <div className='app-container'>
      <App />
    </div>
  </Provider>,
  document.getElementById('react-app'))

module.hot.accept()
