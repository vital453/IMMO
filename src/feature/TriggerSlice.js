import { createSlice } from "@reduxjs/toolkit";

export const triggerSlice = createSlice({
  name: "trigger",
  initialState: {
    trigg: false,
    ouverture: false,
    clickk: 1,
    id: 0,
    date_actu: "",

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
    setdate: (state, { payload }) => {
      state.date_actu = payload;
      localStorage.setItem("dateActu", JSON.stringify(payload));
    },
  },
});

export const { settrigg, setouvre, setclickk, setid, setdate } = triggerSlice.actions;
export default triggerSlice.reducer;
