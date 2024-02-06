import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from '../redux/missions/missionSlice';
import rocketSlice from './rockets/rocketSlice';
import dragonsSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketSlice,
    dragons: dragonsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
