import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from '../redux/missions/missionSlice';
import rocketSlice from './rockets/rocketSlice';
<<<<<<< HEAD
import dragonsSlice from './dragons/dragonsSlice';
=======
>>>>>>> f948a04cea648b203832e7271037e428e66f2c66

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketSlice,
<<<<<<< HEAD
    dragons: dragonsSlice
=======
>>>>>>> f948a04cea648b203832e7271037e428e66f2c66
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
