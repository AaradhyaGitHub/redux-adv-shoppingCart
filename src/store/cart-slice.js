import { createSlice } from "@reduxjs/toolkit";

initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++,
          (existingItem.totalPrice = existingItem.totalPrice + newItem.price);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.item.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    }
  }
});
