import { createSlice } from "@reduxjs/toolkit";

const initialUIstate = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  intialState: initialUIstate,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;
