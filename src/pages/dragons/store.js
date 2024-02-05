import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dragonsReducer from './reducers.js'; 

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(logger),

});

export default store;