import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from '././containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'babel-polyfill';



import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';



const regeneratorRuntime = require('babel-runtime/regenerator');

if (!regeneratorRuntime.default) {
  regeneratorRuntime.default = regeneratorRuntime;
}

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
