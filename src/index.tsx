import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App/App'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

const rendered = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(rendered, document.getElementById('root'));
serviceWorker.unregister();
