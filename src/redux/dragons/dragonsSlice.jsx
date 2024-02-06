import { createSlice } from '@reduxjs/toolkit';

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
  },
  reducers: {
    setDragons: (state, action) => {
      state.dragons = action.payload.map(({ id, name, type, flickr_images }) => ({
        id,
        name,
        type,
        flickr_images,
        reserved: false,
      }));
    },
    reserveDragon: (state, action) => {
      const { id } = action.payload;
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id !== id) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
    },
    cancelReservation: (state, action) => {
      const { id } = action.payload;
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id !== id) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
    },
  },
});

export const { setDragons, reserveDragon, cancelReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
