import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from '../redux/missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(logger),

});

export default store;