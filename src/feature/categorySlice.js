import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  pays: [],
  departement: [],
  commune: [],
  arrondissement: [],
};

const categorySlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    recuppays: (state, { payload }) => {
      if (payload) {
        state.pays = payload;
      }
    },
    recupdepartement: (state, { payload }) => {
      if (payload) {
        state.departement = payload;
      }
    },
    recupcommune: (state, { payload }) => {
      if (payload) {
        state.commune = payload;
      }
    },
    recuparrondissement: (state, { payload }) => {
      if (payload) {
        state.arrondissement = payload;
      }
    },
    recupcategory: (state, { payload }) => {
      if (payload) {
        state.categories = payload;
      }
    },
  },
});

export const {
  recuppays,
  recupdepartement,
  recupcommune,
  recuparrondissement,
  recupcategory,
} = categorySlice.actions;
export default categorySlice.reducer;
