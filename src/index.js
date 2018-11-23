import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from '././containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'babel-polyfill';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../src/sagas';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const regeneratorRuntime = require('babel-runtime/regenerator');

if (!regeneratorRuntime.default) {
  regeneratorRuntime.default = regeneratorRuntime;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)


sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
