import { createSlice } from "@reduxjs/toolkit";

export const triggerSlice = createSlice({
  name: "trigger",
  initialState: {
    trigg: false,
    ouverture: false,
    clickk: 0,
    id: 0,
  },

  reducers: {
    settrigg: (state, { payload }) => {
      state.trigg = payload;
    },
    setouvre: (state, { payload }) => {
      state.ouverture = payload;
    },
    setclickk: (state, { payload }) => {
      state.clickk = payload;
    },
    setid: (state, { payload }) => {
      state.id = payload;
    },
  },
});

export const { settrigg, setouvre, setclickk, setid } = triggerSlice.actions;
export default triggerSlice.reducer;
