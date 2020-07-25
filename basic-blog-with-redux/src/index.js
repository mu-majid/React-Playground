import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import App from './components/App';

ReactDOM.render(
  <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
    <App />
  </Provider>,
  document.getElementById('root')
);

