import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Admin from './core/Admin'
import reducers from './core/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

const rendered = (
  <Provider store={store}>
    <Admin />
  </Provider>
)

ReactDOM.render(rendered, document.getElementById('root'));
serviceWorker.unregister();
