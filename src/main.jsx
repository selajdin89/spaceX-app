// index.js (or your root file)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './pages/dragons/store';; 
import App from './App'; 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


