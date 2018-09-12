import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory, browserHistory } from 'react-router';
import App from './components/app';
import reducers from './reducers';
import routes from './routes';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(logger(), thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
