import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
  name: "",
  phone: "",
  date: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    getUrl: (state, action) => {
      state.url = action.payload;
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
    getPhone: (state, action) => {
      state.phone = action.payload;
    },
    getDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { url, name, phone, date, getUrl, getName, getPhone, getDate } =
  cardSlice.actions;

export default cardSlice.reducer;
