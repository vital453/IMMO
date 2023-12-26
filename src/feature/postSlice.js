import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maison_apparte: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    recupmaison_apparte: (state, { payload }) => {
      if (payload) {
        state.maison_apparte = payload;
      }
    },
  },
});

export const { recupmaison_apparte } = postSlice.actions;
export default postSlice.reducer;
