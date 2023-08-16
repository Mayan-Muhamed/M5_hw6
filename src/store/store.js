import { configureStore } from "@reduxjs/toolkit";
import { shopCartReducer } from "./shopCartSlice";

export const store = configureStore({
    reducer: {
        cart: shopCartReducer
    }
})