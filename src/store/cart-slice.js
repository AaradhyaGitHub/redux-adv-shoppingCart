import { createSlice } from "@reduxjs/toolkit";

initialCartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action){
            
        },
        removeItemFromCart(){

        }
    }
})