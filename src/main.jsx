<<<<<<< HEAD
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


=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
)
>>>>>>> f0fa4929e21d782118278104126d551815cd7b7c
