// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  venue: null,
};

const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    setVenue: (state, action) => {
      state.venue = action.payload.venue;
      state.customerType = action.payload.customerType
    }
  },
});

export const { setVenue } = venueSlice.actions;
export default venueSlice.reducer;
