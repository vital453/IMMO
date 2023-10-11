import { createSlice } from "@reduxjs/toolkit";

export const triggerSlice = createSlice({
  name: "trigger",
  initialState: {
    trigg: false,
    ouverture: false,
  },

  reducers: {
    settrigg: (state, { payload }) => {
      state.trigg = payload;
    },
    setouvre: (state, { payload }) => {
      state.ouverture = payload;
    },
  },
});

export const { settrigg, setouvre } = triggerSlice.actions;
export default triggerSlice.reducer;
