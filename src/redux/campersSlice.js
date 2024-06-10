import { createSlice } from '@reduxjs/toolkit';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    currentPage: 1,
    itemsPerPage: 4,
  },
  reducers: {
    setCampers: (state, action) => {
      state.campers = action.payload;
    },
    loadMoreCampers: (state) => {
      state.currentPage += 1;
    },
  },
});

export const { setCampers, loadMoreCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
