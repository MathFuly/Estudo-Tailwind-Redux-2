import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prodList: [
    {
      id: 1,
      title: "Pc Gamer",
      price: 2000,
      image: "https://cf.shopee.com.br/file/0f519bd65c77947ab75d871171891d12",
    },
    {
      id: 2,
      title: "Cadeira Gamer",
      price: 500,
      image: "https://cf.shopee.com.br/file/303ea460f7749812cc79312614435c63",
    },
    {
      id: 3,
      title: "Mouse Gamer",
      price: 199.99,
      image:
        "https://ae01.alicdn.com/kf/HTB1UXFlXfvsK1RjSspdq6AZepXaS/New-Fashion-Portable-Mouse-Gamer-Design-1200-DPI-USB-Wired-Optical-Gaming-Mice-Mouse-For-PC.jpg_640x640.jpg",
    },
  ],
  kartItems: [],
};

export const kartSlice = createSlice({
  name: "kart",
  initialState,
  reducers: {
    addToKart: (state, action) => {
      state.kartItems = action.payload;
    },
  },
});

export const { prodList, kartItems, addToKart } = kartSlice.actions;

export default kartSlice.reducer;
