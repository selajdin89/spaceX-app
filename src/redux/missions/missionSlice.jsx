import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    setMissions: (state, action) => action.payload.map(({ mission_id, mission_name, description }) => ({ mission_id, mission_name, description })),
  },
});

export const { setMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
